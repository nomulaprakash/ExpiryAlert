import React, { useState, useEffect, useRef } from 'react';
import { enablePushNotifications, sendLocalNotification } from './notification.js';
import { signOut, sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase.js';
import { LogOut, User, CheckCircle2, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';
import { loadUserItems, saveUserItems, getSampleItemsForUser } from './storageService.js';

const LOCATIONS = [
  { id: 'Refrigerator', label: '🧊 Refrigerator' },
  { id: 'Kitchen Shelf', label: '🍞 Kitchen Shelf' },
  { id: 'Bedroom Cupboard', label: '🛏️ Bedroom Cupboard' },
  { id: 'Medicine Box', label: '💊 Medicine Box' },
  { id: 'Pantry', label: '🗄️ Pantry' },
  { id: 'Other', label: '📍 Other Location' }
];

export default function App({ user }) {
  const currentUser = user || auth.currentUser;
  const currentUid = currentUser?.uid || 'guest';
  const loadedUidRef = useRef(currentUid);

  const [resendingEmail, setResendingEmail] = useState(false);
  const [emailNotice, setEmailNotice] = useState('');

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleResendVerificationEmail = async () => {
    if (!currentUser) return;
    setResendingEmail(true);
    try {
      await sendEmailVerification(currentUser);
      setEmailNotice('Verification link resent! Check your inbox.');
    } catch (err) {
      console.error('Error resending verification:', err);
      setEmailNotice('Could not send verification email. Try again shortly.');
    } finally {
      setResendingEmail(false);
    }
  };

  // User-isolated inventory state
  const [items, setItems] = useState(() => {
    return loadUserItems(currentUser);
  });

  // Keep items synced if user identity changes without remounting
  useEffect(() => {
    if (loadedUidRef.current !== currentUid) {
      loadedUidRef.current = currentUid;
      setItems(loadUserItems(currentUser));
      return;
    }
    saveUserItems(currentUser, items);
  }, [items, currentUid, currentUser]);

  const handleLoadSampleItems = () => {
    const samples = getSampleItemsForUser(currentUser);
    setItems((prev) => {
      // Append or load samples for this user
      if (prev.length === 0) return samples;
      return [...prev, ...samples];
    });
  };

  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard', 'add', 'notifications', 'locations'
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('All');
  const [notificationPermission, setNotificationPermission] = useState('default');

  // Form State
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState('Groceries');
  const [formExpiryDate, setFormExpiryDate] = useState('');
  const [formLocation, setFormLocation] = useState('Refrigerator');
  const [formSubLocation, setFormSubLocation] = useState('');
  const [formPhoto, setFormPhoto] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);

  // Modal Detail State
  const [viewingItem, setViewingItem] = useState(null);

  // Notification Permission check
  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  const requestNotificationAccess = async () => {
    try {
      if (!('Notification' in window)) {
        alert('❌ This browser does not support notifications.');
        return;
      }

      const res = await enablePushNotifications();
      const token = res?.token;
      setNotificationPermission(Notification.permission);

      if (token) {
        localStorage.setItem('expiry_alert_fcm_token', token);
      }

      // Show an immediate confirmation notification safely across desktop & mobile
      await sendLocalNotification('🔔 ExpiryAlert Notifications Enabled', {
        body: 'Push alerts are active. You will receive automatic reminders 5 days & 3 days before items expire.',
        icon: '/favicon.ico'
      });

      alert(
        '✅ Push notifications enabled successfully!\n\n' +
        'Your device is now registered to receive expiry alerts.'
      );
    } catch (error) {
      console.error('❌ Notification setup error:', error);

      alert(
        '❌ Could not enable push notifications.\n\n' +
        (error?.message || 'Please check browser notification permissions in your browser or device settings.')
      );
    }
  };

  // Send an instant test notification
  const handleSendTestNotification = async () => {
    if (!('Notification' in window)) {
      alert('❌ This browser does not support notifications.');
      return;
    }

    if (Notification.permission !== 'granted') {
      await requestNotificationAccess();
      return;
    }

    const sent = await sendLocalNotification('🚨 ExpiryAlert Test: Milk Expiring Soon', {
      body: 'Organic Milk is stored in Refrigerator (Top Shelf) and expires in 3 days!',
      icon: '/favicon.ico'
    });

    if (sent) {
      alert('🔔 Test notification sent! Check your system notification tray or lock screen.');
    } else {
      alert('⚠️ Could not display notification. Please ensure browser notifications are allowed in system settings.');
    }
  };

  // Send real notifications for all currently expiring items
  const handleSendAllDueReminders = async () => {
    if (!('Notification' in window)) {
      alert('❌ This browser does not support notifications.');
      return;
    }

    if (Notification.permission !== 'granted') {
      await requestNotificationAccess();
      return;
    }

    const urgentItems = [...itemsExpiring3d, ...itemsExpiring5d];
    if (urgentItems.length === 0) {
      alert('🎉 Great news! You currently have no items expiring within 5 days.');
      return;
    }

    for (const item of urgentItems) {
      const days = getDaysRemaining(item.expiryDate);
      const isCritical = days <= 3;
      await sendLocalNotification(
        isCritical ? `🚨 CRITICAL: ${item.name} expires in ${days} day(s)!` : `⚠️ WARNING: ${item.name} expires in ${days} days`,
        {
          body: `Location: ${item.location} (${item.subLocation}). Expiry date: ${item.expiryDate}.`,
          icon: '/favicon.ico'
        }
      );
    }

    alert(`🔔 Sent ${urgentItems.length} expiry reminder notification(s) to your device!`);
  };

  // Days until expiry calculation
  const getDaysRemaining = (expiryDateStr) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDateStr);
    expiry.setHours(0, 0, 0, 0);

    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get Status Info
  const getItemStatus = (days) => {
    if (days < 0) return { label: 'Expired', badgeClass: 'badge-expired', icon: '❌', severity: 'expired' };
    if (days === 0) return { label: 'Expires Today', badgeClass: 'badge-critical', icon: '🚨', severity: 'critical' };
    if (days <= 3) return { label: `Critical: ${days}d Left`, badgeClass: 'badge-critical', icon: '🚨', severity: 'critical' };
    if (days <= 5) return { label: `Warning: ${days}d Left`, badgeClass: 'badge-warning', icon: '⚠️', severity: 'warning' };
    return { label: `Fresh: ${days}d Left`, badgeClass: 'badge-fresh', icon: '🟢', severity: 'fresh' };
  };

  // Handle Photo File Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormPhoto(reader.result);
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Item Handler
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!formName || !formExpiryDate) return;

    const newItem = {
      id: Date.now().toString(),
      name: formName.trim(),
      category: formCategory,
      expiryDate: formExpiryDate,
      location: formLocation,
      subLocation: formSubLocation ? formSubLocation.trim() : 'Standard Shelf',
      photo: formPhoto || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString(),
      userId: currentUser?.uid || '',
      userEmail: currentUser?.email || ''
    };

    setItems([newItem, ...items]);

    // Reset Form
    setFormName('');
    setFormExpiryDate('');
    setFormSubLocation('');
    setFormPhoto('');
    setPhotoPreview(null);
    setActiveTab('dashboard');
  };

  // Delete Item
  const handleDeleteItem = (id) => {
    if (confirm('Are you sure you want to remove this item?')) {
      setItems(items.filter(item => item.id !== id));
      if (viewingItem?.id === id) setViewingItem(null);
    }
  };

  // Filter Items
  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || item.location === selectedLocation;

    const days = getDaysRemaining(item.expiryDate);
    const status = getItemStatus(days);
    const matchesStatus = selectedStatusFilter === 'All' ||
      (selectedStatusFilter === 'warning' && (days === 4 || days === 5)) ||
      (selectedStatusFilter === 'critical' && days >= 0 && days <= 3) ||
      (selectedStatusFilter === 'expired' && days < 0) ||
      (selectedStatusFilter === 'fresh' && days > 5);

    return matchesSearch && matchesLocation && matchesStatus;
  });

  // Calculate Alerts
  const itemsExpiring5d = items.filter(i => {
    const d = getDaysRemaining(i.expiryDate);
    return d === 4 || d === 5;
  });

  const itemsExpiring3d = items.filter(i => {
    const d = getDaysRemaining(i.expiryDate);
    return d >= 0 && d <= 3;
  });

  const expiredItems = items.filter(i => getDaysRemaining(i.expiryDate) < 0);

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '1.5rem 1rem', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>

      {/* Header & App Title */}
      <header className="glass-panel" style={{ padding: '1.25rem 2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '14px',
            background: 'var(--gradient-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
          }}>
            🔔
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              ExpiryAlert <span className="gradient-text" style={{ fontSize: '0.9rem', fontWeight: '600' }}>Smart Reminder</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Never waste food or miss medication expiry dates again</p>
          </div>
        </div>

        {/* Top Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {notificationPermission !== 'granted' && (
            <button onClick={requestNotificationAccess} className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 0.9rem' }}>
              🔔 Enable Push Alerts
            </button>
          )}

          <button onClick={() => setActiveTab('add')} className="btn btn-primary" style={{ padding: '0.55rem 1.1rem' }}>
            ➕ Add Item
          </button>

          {/* User Profile & Logout */}
          {currentUser && (
            <div className="header-user-badge">
              <div className="header-user-avatar">
                {currentUser.email ? currentUser.email.charAt(0).toUpperCase() : <User size={14} />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }} title={currentUser.email}>
                  {currentUser.email}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--status-fresh)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <ShieldCheck size={10} /> Private Data
                </span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="header-logout-btn"
                title="Log out of ExpiryAlert"
              >
                <LogOut size={13} />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Unverified Email Reminder Banner (if user is logged in with unverified email) */}
      {currentUser && !currentUser.emailVerified && (
        <div
          className="auth-alert auth-alert-warning"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <AlertTriangle size={18} style={{ color: 'var(--status-warning)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.88rem' }}>
              Your email (<strong>{currentUser.email}</strong>) is not verified yet. Please check your inbox.
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {emailNotice && <span style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>{emailNotice}</span>}
            <button
              type="button"
              onClick={handleResendVerificationEmail}
              disabled={resendingEmail}
              className="auth-quick-fill-btn"
              style={{ background: 'rgba(245, 158, 11, 0.25)', borderColor: 'rgba(245, 158, 11, 0.5)' }}
            >
              {resendingEmail ? 'Sending...' : 'Resend Verification Link'}
            </button>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <nav style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', overflowX: 'auto' }}>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`btn ${activeTab === 'dashboard' ? 'btn-primary' : 'btn-secondary'}`}
        >
          📊 Dashboard ({items.length})
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`btn ${activeTab === 'notifications' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ position: 'relative' }}
        >
          🔔 Reminders Center
          {(itemsExpiring5d.length + itemsExpiring3d.length) > 0 && (
            <span style={{
              background: '#ef4444',
              color: '#fff',
              borderRadius: '50px',
              padding: '0.1rem 0.5rem',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              marginLeft: '0.3rem'
            }}>
              {itemsExpiring5d.length + itemsExpiring3d.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('add')}
          className={`btn ${activeTab === 'add' ? 'btn-primary' : 'btn-secondary'}`}
        >
          📝 Add New Item
        </button>
      </nav>

      {/* ALERT BANNER IF CRITICAL ITEMS EXIST */}
      {(itemsExpiring3d.length > 0 || itemsExpiring5d.length > 0) && activeTab === 'dashboard' && (
        <section className="glass-panel" style={{
          padding: '1.25rem 1.75rem',
          background: itemsExpiring3d.length > 0 ? 'var(--gradient-alert-3d)' : 'var(--gradient-alert-5d)',
          borderColor: itemsExpiring3d.length > 0 ? 'rgba(239, 68, 68, 0.4)' : 'rgba(245, 158, 11, 0.4)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>{itemsExpiring3d.length > 0 ? '🚨' : '⚠️'}</span>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>
                {itemsExpiring3d.length > 0
                  ? `Attention: ${itemsExpiring3d.length} item(s) expiring within 3 days!`
                  : `Reminder: ${itemsExpiring5d.length} item(s) expiring within 5 days!`}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.875rem' }}>
                Check storage locations to use or discard before expiry.
              </p>
            </div>
          </div>
          <button onClick={() => setActiveTab('notifications')} className="btn btn-secondary" style={{ background: 'rgba(0,0,0,0.3)' }}>
            View Reminders ↗
          </button>
        </section>
      )}

      {/* MAIN CONTENT AREA */}
      {activeTab === 'dashboard' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

          {/* USER WORKSPACE BANNER */}
          <div className="glass-panel" style={{ padding: '0.85rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', background: 'rgba(99, 102, 241, 0.08)', borderColor: 'rgba(99, 102, 241, 0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShieldCheck size={18} style={{ color: 'var(--status-fresh)', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Personal Workspace: </span>
                <strong style={{ color: 'var(--text-primary)' }}>{currentUser?.email || 'User'}</strong>
                <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--status-fresh)', padding: '2px 8px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  Isolated & Private
                </span>
              </div>
            </div>
            {items.length > 0 && (
              <button
                type="button"
                onClick={handleLoadSampleItems}
                className="btn btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                title="Add sample demo items to your private list"
              >
                <Sparkles size={13} />
                + Load Demo Samples
              </button>
            )}
          </div>

          {/* STATS OVERVIEW CARDS */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>TOTAL STORED</span>
              <p style={{ fontSize: '1.8rem', fontWeight: '800', marginTop: '0.2rem' }}>{items.length}</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem', borderColor: 'var(--status-warning-border)' }}>
              <span style={{ color: 'var(--status-warning)', fontSize: '0.85rem', fontWeight: '600' }}>⚠️ 5 DAYS REMINDER</span>
              <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--status-warning)', marginTop: '0.2rem' }}>{itemsExpiring5d.length}</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem', borderColor: 'var(--status-critical-border)' }}>
              <span style={{ color: 'var(--status-critical)', fontSize: '0.85rem', fontWeight: '600' }}>🚨 3 DAYS CRITICAL</span>
              <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--status-critical)', marginTop: '0.2rem' }}>{itemsExpiring3d.length}</p>
            </div>

            <div className="glass-panel" style={{ padding: '1.25rem', borderColor: 'var(--status-expired-border)' }}>
              <span style={{ color: 'var(--status-expired)', fontSize: '0.85rem', fontWeight: '600' }}>❌ EXPIRED</span>
              <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--status-expired)', marginTop: '0.2rem' }}>{expiredItems.length}</p>
            </div>
          </section>

          {/* SEARCH & FILTER CONTROLS */}
          <section className="glass-panel" style={{ padding: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 250px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="🔍 Search items by name or location..."
                className="form-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: '1 1 auto' }}>
              <select className="form-select" style={{ width: 'auto' }} value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                <option value="All">📍 All Storage Locations</option>
                {LOCATIONS.map(loc => (
                  <option key={loc.id} value={loc.id}>{loc.label}</option>
                ))}
              </select>

              <select className="form-select" style={{ width: 'auto' }} value={selectedStatusFilter} onChange={(e) => setSelectedStatusFilter(e.target.value)}>
                <option value="All">🏷️ All Statuses</option>
                <option value="critical">🚨 Critical (&le; 3d)</option>
                <option value="warning">⚠️ Warning (4 - 5d)</option>
                <option value="fresh">🟢 Fresh (&gt; 5d)</option>
                <option value="expired">❌ Expired</option>
              </select>
            </div>
          </section>

          {/* ITEM CARDS GRID */}
          {filteredItems.length === 0 ? (
            <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</p>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                {items.length === 0 ? 'Your Private Inventory is Empty' : 'No items match your filter'}
              </h3>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', maxWidth: '520px', margin: '0.5rem auto 0 auto', lineHeight: 1.5 }}>
                {items.length === 0
                  ? `You are signed in as ${currentUser?.email || 'your account'}. Items you add here are completely private to your account and cannot be viewed by any other user.`
                  : 'Try clearing your search or add a new item to your list.'}
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                {items.length === 0 ? (
                  <>
                    <button onClick={() => setActiveTab('add')} className="btn btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
                      ➕ Add Your First Item
                    </button>
                    <button onClick={handleLoadSampleItems} className="btn btn-secondary" style={{ padding: '0.65rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={16} /> Load Demo Items
                    </button>
                  </>
                ) : (
                  <button onClick={() => { setSearchQuery(''); setSelectedLocation('All'); setSelectedStatusFilter('All'); }} className="btn btn-secondary">
                    Reset Filters
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="items-grid">
              {filteredItems.map(item => {
                const days = getDaysRemaining(item.expiryDate);
                const status = getItemStatus(days);

                return (
                  <div key={item.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>

                    {/* Item Photo */}
                    <div style={{ height: '160px', width: '100%', overflow: 'hidden', background: '#111827', position: 'relative' }}>
                      <img
                        src={item.photo}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                        <span className={`badge ${status.badgeClass}`}>
                          {status.icon} {status.label}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.2rem' }}>{item.name}</h3>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: '600', textTransform: 'uppercase' }}>
                          {item.category || 'General Item'}
                        </span>
                      </div>

                      {/* Location Badge */}
                      <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.6rem 0.8rem', fontSize: '0.85rem' }}>
                        <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span>📍</span>
                          <strong style={{ color: 'var(--text-primary)' }}>{item.location}</strong>
                          {item.subLocation && <span>– {item.subLocation}</span>}
                        </div>
                      </div>

                      {/* Expiry Date */}
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem' }}>
                        <span>📅 Expires: <strong>{item.expiryDate}</strong></span>
                      </div>

                      {/* Card Buttons */}
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                        <button onClick={() => setViewingItem(item)} className="btn btn-secondary" style={{ flex: 1, padding: '0.45rem', fontSize: '0.8rem', justifyContent: 'center' }}>
                          👁️ View Details
                        </button>
                        <button onClick={() => handleDeleteItem(item.id)} className="btn btn-danger" style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}>
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* NOTIFICATION & REMINDER SIMULATOR CENTER */}
      {activeTab === 'notifications' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <section className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem' }}>📱</span>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Smart Push Notification Reminders</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Simulated preview of automated system push notifications sent at <strong>5 days before expiry</strong> and <strong>3 days before expiry</strong>.
                </p>
              </div>
            </div>

            {/* Notification permission status & Action Controls */}
            <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid var(--border-glow)', padding: '1.25rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <strong style={{ fontSize: '0.95rem' }}>Device Push Notification Status:</strong>{' '}
                  <span style={{ color: notificationPermission === 'granted' ? 'var(--status-fresh)' : 'var(--status-warning)', fontWeight: 'bold' }}>
                    {notificationPermission.toUpperCase()}
                  </span>
                </div>
                {notificationPermission !== 'granted' && (
                  <button onClick={requestNotificationAccess} className="btn btn-primary" style={{ fontSize: '0.85rem' }}>
                    🔔 Enable Push Notifications
                  </button>
                )}
              </div>

              {/* Instant Test and Trigger Notification Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
                <button
                  type="button"
                  onClick={handleSendTestNotification}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  🔔 Send Test Notification
                </button>

                <button
                  type="button"
                  onClick={handleSendAllDueReminders}
                  className="btn btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  🚨 Trigger Real Expiry Alerts ({itemsExpiring3d.length + itemsExpiring5d.length})
                </button>
              </div>
            </div>
          </section>

          {/* SIMULATED NOTIFICATION CARDS */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Active Notification Feed</h3>

            {/* 3 Days Notifications */}
            {itemsExpiring3d.map(item => (
              <div key={`3d-${item.id}`} className="glass-panel" style={{ padding: '1.25rem 1.5rem', background: 'var(--gradient-alert-3d)', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2rem' }}>🚨</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>
                        🚨 {item.name} expires in {getDaysRemaining(item.expiryDate)} days!
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>3-Day Critical Trigger</span>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginTop: '0.3rem', fontSize: '0.9rem' }}>
                      📍 <strong>Location:</strong> {item.location} – {item.subLocation}
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                      Expiry Date: {item.expiryDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* 5 Days Notifications */}
            {itemsExpiring5d.map(item => (
              <div key={`5d-${item.id}`} className="glass-panel" style={{ padding: '1.25rem 1.5rem', background: 'var(--gradient-alert-5d)', borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '2rem' }}>⚠️</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>
                        ⚠️ {item.name} expires in {getDaysRemaining(item.expiryDate)} days
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>5-Day Warning Trigger</span>
                    </div>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginTop: '0.3rem', fontSize: '0.9rem' }}>
                      📍 <strong>Location:</strong> {item.location} – {item.subLocation}
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                      Expiry Date: {item.expiryDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {(itemsExpiring3d.length === 0 && itemsExpiring5d.length === 0) && (
              <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '2.5rem' }}>🎉</span>
                <h4 style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>No Active Expiry Reminders</h4>
                <p style={{ fontSize: '0.875rem', marginTop: '0.3rem' }}>All stored items are fresh or no items are within the 5-day window.</p>
              </div>
            )}
          </section>
        </div>
      )}

      {/* ADD NEW ITEM FORM */}
      {activeTab === 'add' && (
        <section className="glass-panel" style={{ padding: '2.5rem', maxWidth: '700px', margin: '0 auto', width: '100%' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📝</span> Add New Item to ExpiryAlert
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Upload a photo, select storage location, and set expiry date for automatic alerts.
          </p>

          <form onSubmit={handleAddItem} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Photo Capture / Upload */}
            <div className="form-group">
              <label className="form-label">📸 Item Photo (Upload or Take Photo)</label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="form-input"
                  style={{ flex: 1 }}
                />
              </div>

              {photoPreview && (
                <div style={{ marginTop: '0.75rem', width: '120px', height: '120px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--accent-primary)' }}>
                  <img src={photoPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>

            {/* Item Name */}
            <div className="form-group">
              <label className="form-label">📝 Item Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Milk, Amoxicillin, Greek Yogurt, Eggs..."
                className="form-input"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label className="form-label">🏷️ Category</label>
              <select className="form-select" value={formCategory} onChange={(e) => setFormCategory(e.target.value)}>
                <option value="Groceries">🥦 Groceries / Dairy</option>
                <option value="Medicine">💊 Medicine & Supplies</option>
                <option value="Bakery">🍞 Bakery & Bread</option>
                <option value="Beverages">🥤 Beverages</option>
                <option value="Cosmetics">💄 Cosmetics & Skincare</option>
                <option value="Other">📦 Other</option>
              </select>
            </div>

            {/* Expiry Date */}
            <div className="form-group">
              <label className="form-label">📅 Expiry Date *</label>
              <input
                type="date"
                required
                className="form-input"
                value={formExpiryDate}
                onChange={(e) => setFormExpiryDate(e.target.value)}
              />
            </div>

            {/* Storage Location */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">📍 Main Storage Location</label>
                <select className="form-select" value={formLocation} onChange={(e) => setFormLocation(e.target.value)}>
                  {LOCATIONS.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">📌 Specific Spot / Shelf</label>
                <input
                  type="text"
                  placeholder="e.g. Top Shelf, Door Rack, Box 2"
                  className="form-input"
                  value={formSubLocation}
                  onChange={(e) => setFormSubLocation(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '0.85rem', justifyContent: 'center', fontSize: '1rem' }}>
              🔔 Save Item & Activate Reminders
            </button>
          </form>
        </section>
      )}

      {/* DETAIL MODAL */}
      {viewingItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div className="glass-panel" style={{ maxWidth: '520px', width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
            <button onClick={() => setViewingItem(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>
              ✕
            </button>

            <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
              <img src={viewingItem.photo} alt={viewingItem.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: '800' }}>{viewingItem.name}</h2>
              <span className={`badge ${getItemStatus(getDaysRemaining(viewingItem.expiryDate)).badgeClass}`}>
                {getItemStatus(getDaysRemaining(viewingItem.expiryDate)).label}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px' }}>
              <p>📍 <strong>Location:</strong> {viewingItem.location} – {viewingItem.subLocation}</p>
              <p>📅 <strong>Expiry Date:</strong> {viewingItem.expiryDate}</p>
              <p>⏳ <strong>Days Remaining:</strong> {getDaysRemaining(viewingItem.expiryDate)} days</p>
            </div>

            {/* Notification Schedule breakdown */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Scheduled System Notifications:</h4>
              <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem', paddingLeft: '1.2rem' }}>
                <li>⚠️ 5-Day Reminder: Triggered 5 days before {viewingItem.expiryDate}</li>
                <li>🚨 3-Day Critical Alert: Triggered 3 days before {viewingItem.expiryDate}</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button onClick={() => handleDeleteItem(viewingItem.id)} className="btn btn-danger" style={{ flex: 1, justifyContent: 'center' }}>
                🗑️ Delete Item
              </button>
              <button onClick={() => setViewingItem(null)} className="btn btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        ExpiryAlert Smart Expiry Date Reminder • Storage Locations: Refrigerator, Kitchen Shelf, Bedroom Cupboard, Medicine Box
      </footer>
    </div>
  );
}