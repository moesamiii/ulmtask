/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Ulmcare logo 1.png";

// Reusable AuthModal
import { AuthModal } from "../../features/auth";
import { useAuth } from "../../features/auth/hooks/useAuth";
import cartImage from "../../assets/Frame 1000007431.png";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { token, logout } = useAuth();

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
          {/* Logo + Menu container */}
          <div className="flex items-center gap-4 lg:gap-8">
            {/* Logo */}
            <motion.img
              src={logo}
              alt="Logo"
              className="h-[32px] w-auto max-w-[120px] object-contain"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Main Links */}
            <AnimatePresence>
              {(isMobileMenuOpen || window.innerWidth >= 1024) && (
                <motion.div
                  key="menu"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className={`${
                    isMobileMenuOpen ? "flex" : "hidden"
                  } lg:flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6`}
                >
                  <ul className="flex flex-col lg:flex-row list-none gap-2 lg:gap-6">
                    {["home", "services", "about"].map((item) => (
                      <li key={item}>
                        <Link
                          to={item === "home" ? "/" : `/${item}`}
                          className="block text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t(item)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hamburger Icon */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="lg:hidden text-2xl text-gray-800 ml-2"
            onClick={toggleMobileMenu}
          >
            ☰
          </motion.button>

          {/* Right side → Login & Lang buttons */}
          <div className="flex flex-row gap-2 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${
                token
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 px-4 rounded transition`}
              onClick={() => {
                if (token) logout();
                else setShowAuth(true);
                setIsMobileMenuOpen(false);
              }}
            >
              {token ? t("signOut") || "Sign Out" : t("login")}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-100 transition"
              onClick={toggleLang}
            >
              🌐 {i18n.language === "ar" ? "EN" : "عربي"}
            </motion.button>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center bg-[#0798F1] rounded-lg py-[6px] px-[16px] h-[40px]"
              >
                <img src={cartImage} alt="Cart" className="w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Animated Auth Modal */}
      <AnimatePresence>
        {showAuth && (
          <motion.div
            key="authModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AuthModal onClose={() => setShowAuth(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
