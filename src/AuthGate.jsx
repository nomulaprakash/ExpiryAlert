import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";
import App from "./App.jsx";

export default function AuthGate() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="auth-loading-screen">
        <div className="auth-loading-logo">🔔</div>
        <div className="auth-spinner"></div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontWeight: 500 }}>
          Securing ExpiryAlert session...
        </p>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/" replace /> : <Signup />}
      />
      <Route
        path="/"
        element={user ? <App user={user} key={user.uid} /> : <Navigate to="/login" replace />}
      />
      <Route
        path="*"
        element={<Navigate to={user ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}