# 🔔 ExpiryAlert — Smart Expiry Date Reminder

**ExpiryAlert** is a web application designed to track expiry dates for groceries, medications, cosmetics, and household products with storage location tags and automatic 5-day & 3-day notifications.

---

## ✨ Features

- 📸 **Photo Upload & Preview**: Take or upload pictures of items when buying.
- 📝 **Item Details**: Track item name, category, and precise expiry date.
- 📍 **Storage Location Tracking**:
  - 🧊 Refrigerator (Top Shelf, Door, Crisper, etc.)
  - 🍞 Kitchen Shelf
  - 🛏️ Bedroom Cupboard
  - 💊 Medicine Box
  - 🗄️ Pantry / Custom locations
- 🔔 **Automated 5-Day & 3-Day Push Notifications**:
  - **⚠️ Warning (5 days left)**: `⚠️ Milk expires in 5 days | Location: Refrigerator – Top Shelf`
  - **🚨 Critical Alert (3 days left)**: `🚨 Milk expires in 3 days! | Location: Refrigerator – Top Shelf`
- 📊 **Dashboard & Metrics**: Overview of total stored, 5-day warning, 3-day critical, and expired items.
- 🔍 **Search & Filter**: Search by item name or filter by storage location and status (Fresh, Warning, Critical, Expired).
- 💾 **Local Storage Persistence**: Data is automatically saved locally.

---

## 🚀 How to Run

1. Navigate to project folder:
```bash
cd my-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Open your browser at `http://localhost:3000` to launch the application.
