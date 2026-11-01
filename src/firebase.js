import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgdQCfHaJVfIUNqnH_iUkP9muAA9vhS1o",
    authDomain: "expiryalert-15bcb.firebaseapp.com",
    projectId: "expiryalert-15bcb",
    storageBucket: "expiryalert-15bcb.firebasestorage.app",
    messagingSenderId: "889261706688",
    appId: "1:889261706688:web:26b698b8a1c6eac4c355"
};

const app = initializeApp(firebaseConfig);

export { app };
export const auth = getAuth(app);

export default app;