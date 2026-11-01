import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./auth.css";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";
import { auth } from "./firebase";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    AlertCircle,
    CheckCircle2,
    RefreshCw,
    Sparkles,
    Check,
    LogIn
} from "lucide-react";

export default function Signup() {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState(location.state?.email || "");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);
    const [verificationSent, setVerificationSent] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setError({ message: "Please enter your email address." });
            return;
        }

        if (password.length < 6) {
            setError({ message: "Password must contain at least 6 characters." });
            return;
        }

        if (password !== confirmPassword) {
            setError({ message: "Passwords do not match. Please re-enter." });
            return;
        }

        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                trimmedEmail,
                password
            );

            // Attempt to send verification email
            try {
                await sendEmailVerification(userCredential.user);
                setVerificationSent(true);
            } catch (verifErr) {
                console.warn("Verification email sending issue:", verifErr);
                setVerificationSent(false);
            }

            setSignupSuccess(true);
        } catch (err) {
            console.error("Firebase Signup error:", err);
            handleFirebaseError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleFirebaseError = (err) => {
        const code = err.code || "";
        switch (code) {
            case "auth/email-already-in-use":
                setError({
                    message: "This email is already registered.",
                    hint: "An account already exists with this email address.",
                    isAlreadyRegistered: true
                });
                break;
            case "auth/invalid-email":
                setError({ message: "Please enter a valid email address." });
                break;
            case "auth/weak-password":
                setError({ message: "Password is too weak. Please choose at least 6 characters." });
                break;
            case "auth/operation-not-allowed":
                setError({ message: "Email/Password accounts are not enabled in the Firebase Console." });
                break;
            case "auth/network-request-failed":
                setError({ message: "Network error. Please check your internet connection." });
                break;
            default:
                setError({ message: err.message || "Signup failed. Please try again." });
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                {/* Brand Header */}
                <div className="auth-brand">
                    <div className="auth-brand-logo">🔔</div>
                    <div>
                        <div className="auth-brand-title">ExpiryAlert</div>
                        <div className="auth-brand-subtitle">Smart Expiry Tracker</div>
                    </div>
                </div>

                {/* Tab switchers */}
                <div className="auth-tabs">
                    <Link to="/login" state={{ email }} className="auth-tab-btn">
                        Log In
                    </Link>
                    <button className="auth-tab-btn active" type="button">
                        Create Account
                    </button>
                </div>

                {signupSuccess ? (
                    /* Success Screen */
                    <div style={{ textAlign: "center", animation: "authFadeIn 0.35s ease" }}>
                        <div
                            style={{
                                width: "60px",
                                height: "60px",
                                borderRadius: "50%",
                                background: "rgba(16, 185, 129, 0.15)",
                                border: "2px solid rgba(16, 185, 129, 0.4)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 1.25rem",
                                color: "#10b981"
                            }}
                        >
                            <CheckCircle2 size={34} />
                        </div>

                        <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem", color: "#ffffff" }}>
                            Account Created! 🎉
                        </h1>

                        <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                            {verificationSent ? (
                                <>
                                    We have sent a verification link to <strong>{email.trim()}</strong>.
                                    Please verify your inbox to secure your account.
                                </>
                            ) : (
                                <>Welcome to ExpiryAlert! Your new account is active and ready to use.</>
                            )}
                        </p>

                        <button
                            type="button"
                            className="auth-submit-btn"
                            onClick={() => navigate("/")}
                            style={{ marginBottom: "0.75rem" }}
                        >
                            Go to Dashboard
                            <ArrowRight size={18} />
                        </button>

                        <div style={{ marginTop: "1rem" }}>
                            <Link to="/login" state={{ email }} className="auth-link" style={{ fontSize: "0.85rem" }}>
                                ← Return to Login
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* Signup Form */
                    <div>
                        <div className="auth-header">
                            <h1>Create an Account ✨</h1>
                            <p>Sign up to track items and never miss an expiry date</p>
                        </div>

                        {error && (
                            <div
                                className="auth-alert auth-alert-error"
                                style={{
                                    marginBottom: "1.1rem",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    gap: "0.5rem"
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                                    <div>
                                        <strong>{error.message}</strong>
                                        {error.hint && (
                                            <p style={{ fontSize: "0.82rem", marginTop: "4px", color: "#fecaca" }}>
                                                {error.hint}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {error.isAlreadyRegistered && (
                                    <div style={{ marginTop: "0.35rem" }}>
                                        <button
                                            type="button"
                                            onClick={() => navigate("/login", { state: { email } })}
                                            className="auth-quick-fill-btn"
                                            style={{
                                                background: "rgba(99, 102, 241, 0.3)",
                                                borderColor: "rgba(99, 102, 241, 0.6)",
                                                color: "#ffffff",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.35rem"
                                            }}
                                        >
                                            <LogIn size={14} />
                                            Log in with this email
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        <form onSubmit={handleSignup} className="auth-form">
                            {/* Email */}
                            <div className="auth-field">
                                <label className="auth-label">Email Address</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <Mail size={18} />
                                    </span>
                                    <input
                                        type="email"
                                        className="auth-input"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        autoComplete="email"
                                        autoFocus
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="auth-field">
                                <label className="auth-label">Password</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <Lock size={18} />
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="auth-input"
                                        placeholder="At least 6 characters"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        className="auth-input-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                        tabIndex={-1}
                                        title={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                {password.length > 0 && (
                                    <div className={`auth-hint ${password.length >= 6 ? "valid" : ""}`}>
                                        {password.length >= 6 ? <Check size={14} /> : "•"}
                                        {password.length >= 6 ? "Strong length (6+ chars)" : "Needs at least 6 characters"}
                                    </div>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div className="auth-field">
                                <label className="auth-label">Confirm Password</label>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <Lock size={18} />
                                    </span>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="auth-input"
                                        placeholder="Re-enter password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        autoComplete="new-password"
                                    />
                                    <button
                                        type="button"
                                        className="auth-input-toggle"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        tabIndex={-1}
                                        title={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                {confirmPassword.length > 0 && (
                                    <div className={`auth-hint ${password === confirmPassword ? "valid" : ""}`}>
                                        {password === confirmPassword ? <Check size={14} /> : "•"}
                                        {password === confirmPassword ? "Passwords match" : "Passwords do not match"}
                                    </div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="auth-submit-btn" disabled={loading}>
                                {loading ? (
                                    <>
                                        <RefreshCw size={18} className="auth-spinner" />
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles size={18} />
                                        Create Free Account
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="auth-footer-text">
                            Already have an account?{" "}
                            <Link to="/login" state={{ email }} className="auth-link">
                                Sign in here
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
