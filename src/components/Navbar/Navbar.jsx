// Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Ulmcare logo 1.png";
import AuthModal from "../AuthModal/AuthModal"; // Import the new modal component

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-main">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <ul className="navbar-links">
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/services">خدماتنا</Link>
              </li>
              <li>
                <Link to="/aboutus">من نحن</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-login">
            {/* Change Link to button to control modal */}
            <button className="login-button" onClick={() => setShowAuth(true)}>
              تسجيل الدخول
            </button>
          </div>
        </div>
      </nav>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
