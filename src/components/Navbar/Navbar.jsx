/* eslint-disable no-unused-vars */

import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/Ulmcare logo 1.png";

// Reusable AuthModal
import { AuthModal } from "../../features/auth";
import { useAuth } from "../../features/auth/hooks/useAuth";
import cartImage from "../../assets/Frame 1000007431.png";
import globeIcon from "../../assets/globe.png";
import profileIcon from "../../assets/cat.jpg";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { t, i18n } = useTranslation();
  const { token, logout } = useAuth();

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const servicesDropdownItems = [
    { name: "التحاليل الطبية", path: "/services/medical-tests" },
    { name: "الأشعة", path: "/services/radiology" },
    { name: "الاطباء", path: "/services/doctors" },
    { name: "الزيارة المنزلية", path: "/services/home-visit" },
    { name: "المرافقة الصحية", path: "/services/healthcare-companion" },
    { name: "السياحة العلاجية", path: "/services/medical-tourism" },
  ];

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
                    <li>
                      <Link
                        to="/"
                        className="block text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {t("home")}
                      </Link>
                    </li>

                    {/* Services with dropdown */}
                    <li
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="block cursor-pointer text-gray-600 font-semibold text-base hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded">
                        {t("services")}
                      </div>

                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            key="servicesDropdown"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full right-0 w-56 bg-white border border-gray-200 rounded shadow-lg py-2 z-50"
                          >
                            {servicesDropdownItems.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setServicesDropdownOpen(false);
                                }}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
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
          <div className="flex flex-row gap-2 items-center relative">
            {token ? (
              <>
                {/* Profile button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    className="flex items-center justify-center border border-gray-300 bg-white rounded-full w-[40px] h-[40px] overflow-hidden"
                    onClick={() => setShowProfileMenu((prev) => !prev)}
                  >
                    <img
                      src={profileIcon}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </motion.div>

                {/* Profile dropdown */}
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      key="profileMenu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-[70px] right-0 bg-white border border-gray-200 rounded shadow-lg z-50"
                    >
                      <button
                        className="block w-full text-left bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition"
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                          setShowProfileMenu(false);
                        }}
                      >
                        {t("signOut") || "Sign Out"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
                onClick={() => {
                  setShowAuth(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                {t("login")}
              </motion.button>
            )}

            {/* Cart */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col items-center justify-center bg-[#0798F1] rounded-lg py-[6px] px-[16px] h-[40px]"
              >
                <img src={cartImage} alt="Cart" className="w-6 h-6" />
              </Link>
            </motion.div>

            {/* Language Switcher → now only globe icon */}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center border border-gray-300 bg-white rounded w-[40px] h-[40px] p-2 hover:bg-gray-100 transition"
              onClick={toggleLang}
            >
              <img
                src={globeIcon}
                alt="Language Switch"
                className="w-full h-full object-contain"
              />
            </motion.button>
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
