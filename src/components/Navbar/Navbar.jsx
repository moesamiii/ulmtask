import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from "../../assets/Ulmcare logo 1.png";
import AuthModal from "../AuthModal/AuthModal";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang); // triggers App.jsx effect to update direction
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-main">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <ul className="navbar-links">
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/services">{t("services")}</Link>
              </li>
              <li>
                <Link to="/aboutus">{t("about")}</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-login">
            <button className="login-button" onClick={() => setShowAuth(true)}>
              {t("login")}
            </button>

            <button className="lang-toggle" onClick={toggleLang}>
              🌐 {i18n.language === "ar" ? "EN" : "عربي"}
            </button>
          </div>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
