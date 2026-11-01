import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./firebase";

const VAPID_KEY =
    "BALy_nRwK-esWIECWEil4ZXftRREWcrLoB4z4c01TXI_bM2Mvn0AYL6RSPKOv7pROfOxexUlBcEnRmPiGYw8tKo";

export async function enablePushNotifications() {
    try {
        if (!("Notification" in window)) {
            throw new Error("This browser does not support notifications.");
        }

        const permission = await Notification.requestPermission();

        if (permission !== "granted") {
            throw new Error("Notification permission was not granted.");
        }

        const messaging = getMessaging(app);

        const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
        );

        const token = await getToken(messaging, {
            vapidKey: VAPID_KEY,
            serviceWorkerRegistration: registration,
        });

        if (!token) {
            throw new Error("FCM token was not generated.");
        }

        console.log("FCM DEVICE TOKEN:");
        console.log(token);

        return token;
    } catch (error) {
        console.error("Notification setup error:", error);
        throw error;
    }
}