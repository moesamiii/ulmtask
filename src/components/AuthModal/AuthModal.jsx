import { useState } from "react";
import "./AuthModal.css"; // Optional: your custom styling

const AuthModal = ({ onClose }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://test.newulmmed.com/api/Authorization/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify({
            user_id: userId,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log("Login API response:", data); // for debugging

      if (!response.ok) {
        throw new Error(data.message || "خطأ في تسجيل الدخول");
      }

      // Optional: Save token if returned
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      alert("تم تسجيل الدخول بنجاح!");
      onClose(); // Close modal
    } catch (err) {
      setError(err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2>تسجيل الدخول</h2>

        <div className="form">
          <label>
            اسم المستخدم أو البريد الإلكتروني
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="أدخل اسم المستخدم"
            />
          </label>

          <label>
            كلمة المرور
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="أدخل كلمة المرور"
            />
          </label>

          {error && (
            <p className="error" style={{ color: "red" }}>
              {error}
            </p>
          )}

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
