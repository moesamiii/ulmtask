import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from "../../assets/Ulmcare logo 1.png";
import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <img src={logo} alt="Logo" className="navbar-logo" />

          {/* Hamburger Icon */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            ☰
          </button>

          {/* Main Links */}
          <div className={`navbar-main ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="navbar-links">
              <li>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link to="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("about")}
                </Link>
              </li>
            </ul>

            <div className="navbar-login">
              <button
                className="login-button"
                onClick={() => {
                  setShowAuth(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t("login")}
              </button>

              <button className="lang-toggle" onClick={toggleLang}>
                🌐 {i18n.language === "ar" ? "EN" : "عربي"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
