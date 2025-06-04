import React from "react";
import "./Footer.css";
import logo from "../../assets/Ulmcare logo 1.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>{t("footer.contact_us")}</h3>
          <ul>
            <li>📞 +966 123 456 789</li>
            <li>📧 info@newulmmed.com</li>
            <li>🏢 {t("footer.location")}</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t("footer.our_services")}</h3>
          <ul>
            <li>{t("footer.services.medical_tests")}</li>
            <li>{t("footer.services.radiology")}</li>
            <li>{t("footer.services.doctors")}</li>
            <li>{t("footer.services.health_facilities")}</li>
            <li>{t("footer.services.medical_tourism")}</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>{t("footer.company")}</h3>
          <ul>
            <li>{t("footer.about_us")}</li>
            <li>{t("footer.our_vision")}</li>
            <li>{t("footer.our_mission")}</li>
            <li>{t("footer.contact")}</li>
          </ul>
        </div>

        <div className="footer-column footer-logo">
          <img src={logo} alt="New Ulm Med Logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} New Ulm Med.{" "}
          {t("footer.rights_reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
