// Storage Service for User-Isolated ExpiryAlert Data
// Ensures that every user logging in with their personal email has completely separate data.

const LEGACY_STORAGE_KEY = 'expiry_alert_items';
const LEGACY_MIGRATED_KEY = 'expiry_alert_legacy_migrated_to';

/**
 * Generates sample items tailored for a specific user
 */
export function getSampleItemsForUser(user) {
  const uid = typeof user === 'string' ? user : (user?.uid || 'guest');
  const email = typeof user === 'object' ? (user?.email || '') : '';
  const now = Date.now();

  return [
    {
      id: `${now}-1`,
      name: 'Organic Milk',
      category: 'Groceries',
      expiryDate: new Date(now + 5 * 86400000).toISOString().split('T')[0], // 5 days from today
      location: 'Refrigerator',
      subLocation: 'Top Shelf',
      photo: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString(),
      userId: uid,
      userEmail: email
    },
    {
      id: `${now}-2`,
      name: 'Amoxicillin Antibiotics',
      category: 'Medicine',
      expiryDate: new Date(now + 3 * 86400000).toISOString().split('T')[0], // 3 days from today
      location: 'Medicine Box',
      subLocation: 'Drawer 1',
      photo: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString(),
      userId: uid,
      userEmail: email
    },
    {
      id: `${now}-3`,
      name: 'Greek Yogurt',
      category: 'Groceries',
      expiryDate: new Date(now + 12 * 86400000).toISOString().split('T')[0], // 12 days
      location: 'Refrigerator',
      subLocation: 'Middle Shelf',
      photo: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString(),
      userId: uid,
      userEmail: email
    },
    {
      id: `${now}-4`,
      name: 'Whole Wheat Bread',
      category: 'Bakery',
      expiryDate: new Date(now - 1 * 86400000).toISOString().split('T')[0], // Expired 1 day ago
      location: 'Kitchen Shelf',
      subLocation: 'Bread Box',
      photo: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80',
      createdAt: new Date().toISOString(),
      userId: uid,
      userEmail: email
    }
  ];
}

/**
 * Returns the isolated storage key for a user
 * @param {string|object} user - Firebase user object or UID
 * @returns {string} Unique storage key
 */
export function getUserStorageKey(user) {
  const uid = typeof user === 'string' ? user : (user?.uid || 'guest');
  return `expiry_alert_items_${uid}`;
}

/**
 * Loads items for a specific user.
 * Guarantees that separate users have completely separate data.
 * @param {string|object} user - Firebase user object or UID
 * @returns {Array} List of items belonging to this user
 */
export function loadUserItems(user) {
  if (!user) return [];

  const uid = typeof user === 'string' ? user : user.uid;
  if (!uid) return [];

  const key = getUserStorageKey(uid);
  const saved = localStorage.getItem(key);

  if (saved !== null) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (err) {
      console.error(`Error parsing items for user ${uid}:`, err);
      return [];
    }
  }

  // Check if legacy unpartitioned data exists and hasn't been claimed yet
  const legacyMigratedTo = localStorage.getItem(LEGACY_MIGRATED_KEY);
  if (!legacyMigratedTo) {
    const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyData) {
      try {
        const parsed = JSON.parse(legacyData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Tag items with this user's UID and email
          const email = typeof user === 'object' ? (user?.email || '') : '';
          const tagged = parsed.map(item => ({
            ...item,
            userId: item.userId || uid,
            userEmail: item.userEmail || email
          }));
          localStorage.setItem(key, JSON.stringify(tagged));
          localStorage.setItem(LEGACY_MIGRATED_KEY, uid);
          return tagged;
        }
      } catch (e) {
        console.warn('Error reading legacy items:', e);
      }
    }
  }

  // Any other/new user gets an empty inventory private to their account
  return [];
}

/**
 * Saves items for a specific user.
 * @param {string|object} user - Firebase user object or UID
 * @param {Array} items - Items array
 */
export function saveUserItems(user, items) {
  if (!user) return;
  const uid = typeof user === 'string' ? user : user.uid;
  if (!uid) return;

  const key = getUserStorageKey(uid);
  try {
    localStorage.setItem(key, JSON.stringify(items || []));
  } catch (err) {
    console.error(`Error saving items for user ${uid}:`, err);
  }
}

/**
 * Clears items for a specific user
 * @param {string|object} user - Firebase user object or UID
 */
export function clearUserItems(user) {
  if (!user) return;
  const uid = typeof user === 'string' ? user : user.uid;
  if (!uid) return;
  localStorage.removeItem(getUserStorageKey(uid));
}

