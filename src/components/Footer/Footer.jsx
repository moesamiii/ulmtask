import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          {t(" NEW ULM", { company: "New Ulm Med" })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
