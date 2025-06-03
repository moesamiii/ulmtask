import React from "react";
import { useTranslation } from "react-i18next";
import "./TestCard.css";

const TestCard = ({ test }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="test-card">
      {test.logo ? (
        <div className="card-logo">
          <img
            src={test.logo}
            alt={
              isArabic
                ? test.arabicName || test.name
                : test.name || test.arabicName
            }
          />
        </div>
      ) : (
        <div className="card-icon">🔬</div> // fallback icon
      )}

      <h3 className="card-title">
        {isArabic ? test.arabicName || test.name : test.name || test.arabicName}
      </h3>
      <p className="card-description">
        {isArabic
          ? test.arabicDescription || test.description || "لا يوجد وصف متوفر"
          : test.description ||
            test.arabicDescription ||
            "No description available"}
      </p>
    </div>
  );
};

export default TestCard;
