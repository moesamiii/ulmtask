import React from "react";
import "./Footer.css";
import logo from "../../assets/Ulmcare logo 1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>تواصل معنا</h3>
          <ul>
            <li>📞 +966 123 456 789</li>
            <li>📧 info@newulmmed.com</li>
            <li>🏢 الاردن - عمان</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>خدماتنا</h3>
          <ul>
            <li>التحاليل الطبية</li>
            <li>الأشعة</li>
            <li>الأطباء</li>
            <li>المرافق الصحية</li>
            <li>السياحة العلاجية</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>الشركة</h3>
          <ul>
            <li>من نحن</li>
            <li>رؤيتنا</li>
            <li>رسالتنا</li>
            <li>اتصل بنا</li>
          </ul>
        </div>

        <div className="footer-column footer-logo">
          <img src={logo} alt="New Ulm Med Logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} New Ulm Med. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
