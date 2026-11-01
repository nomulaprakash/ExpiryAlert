import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./auth.css";
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    signOut
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
    KeyRound,
    UserPlus
} from "lucide-react";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState(location.state?.email || "");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false);

    // Email verification state
    const [unverifiedUser, setUnverifiedUser] = useState(null);
    const [resendingVerification, setResendingVerification] = useState(false);

    // Forgot password mode
    const [isResetMode, setIsResetMode] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMsg("");
        setUnverifiedUser(null);

        const cleanEmail = email.trim();
        if (!cleanEmail || !password) {
            setError({ message: "Please fill in both email and password." });
            return;
        }

        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, cleanEmail, password);
            const user = userCredential.user;

            if (!user.emailVerified) {
                // Keep reference so they can resend or proceed
                setUnverifiedUser(user);
                setError({
                    message: "Note: Your email address has not been verified yet.",
                    isUnverified: true
                });
            } else {
                navigate("/");
            }
        } catch (err) {
            console.error("Firebase Login error:", err);
            handleFirebaseError(err);
        } finally {
            setLoading(false);
        }
    };

    const handleFirebaseError = (err) => {
        const code = err.code || "";
        switch (code) {
            case "auth/invalid-credential":
            case "auth/wrong-password":
            case "auth/user-not-found":
                setError({
                    message: "Incorrect email or password.",
                    hint: "Please double-check your password spelling. If you haven't created an account yet, create one below.",
                    isCredentialError: true
                });
                break;
            case "auth/invalid-email":
                setError({ message: "Please enter a valid email address." });
                break;
            case "auth/user-disabled":
                setError({ message: "This account has been disabled. Please contact support." });
                break;
            case "auth/too-many-requests":
                setError({ message: "Too many unsuccessful attempts. Please wait a moment or reset your password." });
                break;
            case "auth/network-request-failed":
                setError({ message: "Network error. Please check your internet connection." });
                break;
            default:
                setError({ message: err.message || "Failed to sign in. Please try again." });
        }
    };

    // Password reset
    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccessMsg("");

        const cleanEmail = email.trim();
        if (!cleanEmail) {
            setError({ message: "Please enter your email to receive password reset instructions." });
            return;
        }

        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, cleanEmail);
            setSuccessMsg(`Password reset link sent to ${cleanEmail}! Please check your inbox.`);
        } catch (err) {
            console.error("Password reset error:", err);
            if (err.code === "auth/user-not-found") {
                setError({ message: "No account found with this email address. Please sign up." });
            } else if (err.code === "auth/invalid-email") {
                setError({ message: "Please enter a valid email address." });
            } else {
                setError({ message: err.message || "Could not send reset email. Try again later." });
            }
        } finally {
            setLoading(false);
        }
    };

    // Resend verification
    const handleResendVerification = async () => {
        if (!unverifiedUser) return;
        setResendingVerification(true);
        setError(null);
        try {
            await sendEmailVerification(unverifiedUser);
            setSuccessMsg("Verification email resent! Please check your inbox or spam folder.");
        } catch (err) {
            console.error("Resend verification error:", err);
            setError({ message: "Could not resend verification email right now. Please wait a few moments." });
        } finally {
            setResendingVerification(false);
        }
    };

    const handleContinueAnyway = () => {
        navigate("/");
    };

    const handleSignOutUnverified = async () => {
        await signOut(auth);
        setUnverifiedUser(null);
        setError(null);
        setSuccessMsg("");
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
                    <button className="auth-tab-btn active" type="button">
                        Log In
                    </button>
                    <Link to="/signup" state={{ email }} className="auth-tab-btn">
                        Create Account
                    </Link>
                </div>

                {isResetMode ? (
                    /* Password Reset Mode */
                    <div>
                        <div className="auth-header">
                            <h1>Reset Password</h1>
                            <p>Enter your email to receive a password reset link</p>
                        </div>

                        {error && (
                            <div className="auth-alert auth-alert-error" style={{ marginBottom: "1rem" }}>
                                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                                <span>{error.message}</span>
                            </div>
                        )}

                        {successMsg && (
                            <div className="auth-alert auth-alert-success" style={{ marginBottom: "1rem" }}>
                                <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                                <span>{successMsg}</span>
                            </div>
                        )}

                        <form onSubmit={handlePasswordReset} className="auth-form">
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
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <button type="submit" className="auth-submit-btn" disabled={loading}>
                                {loading ? (
                                    <>
                                        <RefreshCw size={18} className="auth-spinner" />
                                        Sending Instructions...
                                    </>
                                ) : (
                                    <>
                                        <KeyRound size={18} />
                                        Send Reset Link
                                    </>
                                )}
                            </button>

                            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                                <button
                                    type="button"
                                    className="auth-link"
                                    onClick={() => {
                                        setIsResetMode(false);
                                        setError(null);
                                        setSuccessMsg("");
                                    }}
                                >
                                    ← Back to Login
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* Standard Login Mode */
                    <div>
                        <div className="auth-header">
                            <h1>Welcome Back 👋</h1>
                            <p>Sign in with your email to manage your expiry reminders</p>
                        </div>

                        {/* Error Alert Box */}
                        {error && !unverifiedUser && (
                            <div
                                className="auth-alert auth-alert-error"
                                style={{
                                    marginBottom: "1.25rem",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    gap: "0.5rem"
                                }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <AlertCircle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                                    <div>
                                        <strong>{error.message}</strong>
                                        {error.hint && (
                                            <p style={{ fontSize: "0.82rem", marginTop: "4px", color: "#fecaca", lineHeight: 1.45 }}>
                                                {error.hint}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {error.isCredentialError && (
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.4rem" }}>
                                        <button
                                            type="button"
                                            onClick={() => navigate("/signup", { state: { email } })}
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
                                            <UserPlus size={14} />
                                            Create Account with this email
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsResetMode(true);
                                                setError(null);
                                            }}
                                            className="auth-quick-fill-btn"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.08)",
                                                borderColor: "rgba(255, 255, 255, 0.2)",
                                                color: "#f3f4f6",
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.35rem"
                                            }}
                                        >
                                            <KeyRound size={14} />
                                            Reset Password
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {successMsg && (
                            <div className="auth-alert auth-alert-success" style={{ marginBottom: "1.1rem" }}>
                                <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                                <span>{successMsg}</span>
                            </div>
                        )}

                        {/* Email verification warning modal/box */}
                        {unverifiedUser && (
                            <div
                                className="auth-alert auth-alert-warning"
                                style={{ marginBottom: "1.25rem", flexDirection: "column", gap: "0.75rem" }}
                            >
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                                    <AlertCircle size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                                    <div>
                                        <strong>Email Not Verified Yet</strong>
                                        <p style={{ marginTop: "4px", fontSize: "0.82rem" }}>
                                            We sent a verification link to <strong>{unverifiedUser.email}</strong>.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", width: "100%", marginTop: "0.25rem" }}>
                                    <button
                                        type="button"
                                        onClick={handleResendVerification}
                                        disabled={resendingVerification}
                                        className="auth-quick-fill-btn"
                                        style={{ background: "rgba(245, 158, 11, 0.2)", borderColor: "rgba(245, 158, 11, 0.4)", color: "#fef3c7" }}
                                    >
                                        {resendingVerification ? "Sending..." : "📨 Resend Verification"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleContinueAnyway}
                                        className="auth-quick-fill-btn"
                                        style={{ background: "rgba(99, 102, 241, 0.2)", borderColor: "rgba(99, 102, 241, 0.4)", color: "#c7d2fe" }}
                                    >
                                        Continue to Dashboard →
                                    </button>

                                    <button
                                        type="button"
                                        onClick={handleSignOutUnverified}
                                        className="auth-link"
                                        style={{ fontSize: "0.78rem", marginLeft: "auto", alignSelf: "center" }}
                                    >
                                        Log out
                                    </button>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="auth-form">
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
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="auth-field">
                                <div className="auth-label">
                                    <span>Password</span>
                                    <button
                                        type="button"
                                        className="auth-link"
                                        style={{ fontSize: "0.8rem", fontWeight: 500 }}
                                        onClick={() => {
                                            setIsResetMode(true);
                                            setError(null);
                                            setSuccessMsg("");
                                        }}
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                                <div className="auth-input-wrapper">
                                    <span className="auth-input-icon">
                                        <Lock size={18} />
                                    </span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="auth-input"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        autoComplete="current-password"
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
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="auth-submit-btn" disabled={loading}>
                                {loading ? (
                                    <>
                                        <RefreshCw size={18} className="auth-spinner" />
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="auth-footer-text">
                            Don't have an account?{" "}
                            <Link to="/signup" state={{ email }} className="auth-link">
                                Create one now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
