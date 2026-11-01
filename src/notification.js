import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./firebase";

const VAPID_KEY =
    "BALy_nRwK-esWIECWEil4ZXftRREWcrLoB4z4c01TXI_bM2Mvn0AYL6RSPKOv7pROfOxexUlBcEnRmPiGYw8tKo";

/**
 * Registers Service Worker, waits for it to become ACTIVE, and subscribes for Push Notifications
 */
export async function enablePushNotifications() {
    try {
        if (!("Notification" in window)) {
            throw new Error("This browser does not support notifications.");
        }

        // 1. Request notification permission
        let permission = Notification.permission;
        if (permission !== "granted") {
            permission = await Notification.requestPermission();
            if (permission !== "granted") {
                throw new Error("Notification permission was not granted by the user.");
            }
        }

        let registration = null;

        // 2. Register Service Worker & WAIT for it to be active
        if ("serviceWorker" in navigator) {
            await navigator.serviceWorker.register("/firebase-messaging-sw.js", { scope: "/" });

            // CRITICAL FIX: navigator.serviceWorker.ready guarantees the service worker is active!
            registration = await navigator.serviceWorker.ready;

            // Ensure registration.active is defined before attempting subscription
            if (!registration.active) {
                const sw = registration.installing || registration.waiting;
                if (sw) {
                    await new Promise((resolve) => {
                        sw.addEventListener("statechange", (e) => {
                            if (e.target.state === "activated") {
                                resolve();
                            }
                        });
                    });
                }
            }

            console.log("✅ Active Service Worker ready for PushManager:", registration);
        }

        // 3. Connect Firebase Cloud Messaging (FCM)
        let token = null;
        try {
            const messaging = getMessaging(app);
            token = await getToken(messaging, {
                vapidKey: VAPID_KEY,
                serviceWorkerRegistration: registration,
            });

            if (token) {
                console.log("================================");
                console.log("✅ FCM DEVICE TOKEN:", token);
                console.log("================================");
                localStorage.setItem("expiry_alert_fcm_token", token);
            }
        } catch (fcmError) {
            console.warn("⚠️ FCM token registration note (local notifications remain fully functional):", fcmError);
        }

        return { token, registration };
    } catch (error) {
        console.error("❌ Notification setup error:", error);
        throw error;
    }
}

/**
 * Sends a real browser notification across desktop & mobile (Android Chrome safe)
 */
export async function sendLocalNotification(title, options = {}) {
    try {
        if (!("Notification" in window) || Notification.permission !== "granted") {
            return false;
        }

        const notificationOptions = {
            icon: "/favicon.ico",
            badge: "/favicon.ico",
            vibrate: [200, 100, 200],
            ...options
        };

        // On mobile Android Chrome, new Notification() throws an error and requires ServiceWorkerRegistration.showNotification()
        if ("serviceWorker" in navigator) {
            const registration = await navigator.serviceWorker.ready;
            if (registration && registration.showNotification) {
                await registration.showNotification(title, notificationOptions);
                return true;
            }
        }

        // Desktop browser fallback
        new Notification(title, notificationOptions);
        return true;
    } catch (err) {
        console.error("❌ Failed to display notification:", err);
        return false;
    }
}