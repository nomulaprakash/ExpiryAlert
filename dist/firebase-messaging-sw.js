// Service Worker lifecycle - ensure immediate activation without waiting
self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

// Import Firebase scripts for background Cloud Messaging
try {
    importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
    importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

    firebase.initializeApp({
        apiKey: "AIzaSyCgdQCfHaJVfIUNqnH_iUkP9muAA9vhS1o",
        authDomain: "expiryalert-15bcb.firebaseapp.com",
        projectId: "expiryalert-15bcb",
        storageBucket: "expiryalert-15bcb.firebasestorage.app",
        messagingSenderId: "889261706688",
        appId: "1:889261706688:web:26b698b8a1c6eac4c355"
    });

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log("[firebase-messaging-sw.js] Background message received:", payload);

        const notificationTitle = payload.notification?.title || "⚠️ ExpiryAlert Reminder";
        const notificationOptions = {
            body: payload.notification?.body || "You have an item expiring soon.",
            icon: payload.notification?.icon || "/favicon.ico",
            badge: "/favicon.ico",
            vibrate: [200, 100, 200],
            data: payload.data || { url: "/" }
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });
} catch (e) {
    console.warn("[firebase-messaging-sw.js] Firebase scripts initialization notice:", e);
}

// Notification click behavior - focus or open ExpiryAlert
self.addEventListener("notificationclick", (event) => {
    event.notification.close();

    const targetUrl = event.notification.data?.url || "/";

    event.waitUntil(
        clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if ("focus" in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});