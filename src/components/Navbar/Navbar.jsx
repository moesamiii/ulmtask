import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Ulmcare logo 1.png";

// Reusable AuthModal
import { AuthModal } from "../../features/auth";
import { useAuth } from "../../features/auth/hooks/useAuth"; // ADD THIS

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { token, logout } = useAuth(); // ADD THIS

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-full bg-white px-4 py-3 shadow-md sticky top-0 z-50 min-h-[60px] rtl">
        <div className="flex items-center justify-between max-w-6xl mx-auto w-full">
          <img src={logo} alt="Logo" className="w-20 h-auto" />

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl text-gray-800"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          {/* Main Links */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center lg:gap-8 w-full lg:w-auto mt-4 lg:mt-0 bg-white lg:bg-transparent border-t lg:border-0 pt-4 lg:pt-0`}
          >
            <ul className="flex flex-col lg:flex-row list-none gap-2 lg:gap-6 w-full lg:w-auto">
              <li>
                <Link
                  to="/"
                  className="block text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🛒 {t("cart")}
                </Link>
              </li>
            </ul>

            {/* Login/SignOut & Language Toggle */}
            <div className="flex flex-col lg:flex-row gap-2 w-full lg:w-auto px-4 lg:px-0 mt-4 lg:mt-0">
              {token ? (
                // If logged in → show Sign Out button
                <button
                  className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition"
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("signOut") || "Sign Out"}
                </button>
              ) : (
                // If not logged in → show Login button
                <button
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                  onClick={() => {
                    setShowAuth(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("login")}
                </button>
              )}

              <button
                className="border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
                onClick={toggleLang}
              >
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
