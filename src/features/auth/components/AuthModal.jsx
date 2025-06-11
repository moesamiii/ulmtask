import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const AuthModal = ({ onClose }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await login({ userId, password });
      alert("تم تسجيل الدخول بنجاح!");
      onClose();
    } catch (err) {
      setError(err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Section (Image) */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(to bottom, #ebf4ff, white)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              fontSize: "1.5rem",
              color: "#2196F3",
              border: "none",
              background: "none",
              cursor: "pointer",
            }}
          >
            ×
          </button>
          <img
            src="/Group 452466.png"
            alt="doctors"
            style={{
              width: "100%",
              maxWidth: "300px",
              margin: "1.5rem 0",
            }}
          />
        </div>

        {/* Right Section (Login Form) */}
        <div
          style={{ flex: 1, backgroundColor: "white", padding: "2.5rem" }}
          dir="rtl"
        >
          <h3
            style={{
              width: "364px",
              height: "21px",
              fontSize: "30px",
              lineHeight: "100%",
              fontWeight: "bold",
              color: "#222222",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}
          >
            تسجيل الدخول
          </h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Email Input */}
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="الايميل"
                style={{
                  width: "364px",
                  height: "52px",
                  padding: "0 1rem",
                  paddingRight: "3rem",
                  border: "1px solid #DDE3E8",
                  borderRadius: "16px",
                  backgroundColor: "white",
                  outline: "none",
                  color: "#333",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#999",
                  fontSize: "1.2rem",
                }}
              >
                👤
              </span>
            </div>

            {/* Password Input */}
            <div style={{ position: "relative" }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                style={{
                  width: "364px",
                  height: "52px",
                  padding: "0 1rem",
                  paddingRight: "3rem",
                  border: "1px solid #DDE3E8",
                  borderRadius: "16px",
                  backgroundColor: "white",
                  outline: "none",
                  color: "#333",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#999",
                  fontSize: "1.2rem",
                }}
              >
                🔒
              </span>
            </div>

            {/* Error */}
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

            {/* Forgot Password */}
            <div
              style={{
                width: "364px",
                height: "17px",
                fontSize: "12px",
                lineHeight: "140%",
                fontWeight: "normal",
                color: "#2196F3",
                cursor: "pointer",
                marginTop: "0.5rem",
                textAlign: "left",
              }}
            >
              هل نسيت كلمة المرور؟
            </div>

            {/* Login Button */}
            <button
              style={{
                width: "364px",
                height: "52px",
                background: "linear-gradient(to right, #2196F3, #0D8AF0)",
                color: "white",
                borderRadius: "16px",
                fontWeight: "600",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                cursor: "pointer",
                opacity: loading ? 0.5 : 1,
                marginTop: "1rem",
                border: "none",
              }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
            </button>

            {/* Create Account */}
            <div
              style={{
                width: "364px",
                height: "24px",
                fontSize: "16px",
                fontWeight: "normal",
                textAlign: "center",
                color: "#666",
                marginTop: "0.5rem",
              }}
            >
              ليس لديك حساب؟{" "}
              <span
                style={{
                  color: "#2196F3",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                إنشاء حساب جديد
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
