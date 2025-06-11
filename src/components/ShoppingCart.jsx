import { useEffect, useState } from "react";
import axios from "axios";

import { useAuth } from "../features/auth/hooks/useAuth";

const ShoppingCart = () => {
  const { token } = useAuth();
  const [cartData, setCartData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          "https://test.newulmmed.com/api/UserCart/GetUserCart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Cart API response:", response);

        if (response.data?.isSuccess) {
          setCartData(response.data.data);
        } else {
          // Instead of setting error → just show static cart
          setCartData(null); // trigger fallback static cart
        }
      } catch (err) {
        console.error("Cart API error:", err);

        // If token valid → still show static cart
        if (token) {
          setCartData(null); // trigger fallback static cart
        } else if (err.response && err.response.status === 401) {
          setError("❌ غير مصرح لك بالوصول إلى السلة. الرجاء تسجيل الدخول.");
        } else {
          setError("❌ حدث خطأ غير متوقع.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchCart();
    } else {
      setLoading(false);
      setError("❌ غير مصرح لك بالوصول إلى السلة. الرجاء تسجيل الدخول.");
    }
  }, [token]);

  if (loading) return <p style={{ padding: "2rem" }}>🕑 جارٍ تحميل السلة...</p>;
  if (error && !token)
    return <p style={{ padding: "2rem", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 سلة التسوق</h2>

      {cartData ? (
        // Real API cart data
        <pre>{JSON.stringify(cartData, null, 2)}</pre>
      ) : token ? (
        // Show static cart if user logged in but no cartData
        <div>
          <p>🛒 هذه سلة تجريبية (static) للمستخدم المسجل.</p>
          <ul>
            <li>منتج 1 - 2x - 50 ريال</li>
            <li>منتج 2 - 1x - 100 ريال</li>
          </ul>
          <p>الإجمالي: 200 ريال</p>
        </div>
      ) : (
        // Not logged in → should not happen because of PrivateRoute
        <p>السلة فارغة.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
