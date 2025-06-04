import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./TestPackageCard.css"; // update this to your new CSS filename

const TestPackageCard = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get(
          "https://newulmmed.com/api/MedicalTest/GetAllMedicalTestPackages?PageNumber=1&PageSize=1"
        );
        setTests(response.data.data || []);
      } catch (err) {
        setError("Failed to fetch test packages.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  if (loading) return <p>{isArabic ? "جار التحميل..." : "Loading..."}</p>;
  if (error) return <p>{isArabic ? "فشل في تحميل البيانات" : error}</p>;

  return (
    <div className="test-package-card-list">
      {tests.map((test) => (
        <div className="test-package-card" key={test.id}>
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
            <div className="card-icon">🔬</div>
          )}

          <h3 className="card-title">
            {isArabic
              ? test.arabicName || test.name
              : test.name || test.arabicName}
          </h3>

          <p className="card-description">
            {isArabic
              ? test.arabicDescription ||
                test.description ||
                "لا يوجد وصف متوفر"
              : test.description ||
                test.arabicDescription ||
                "No description available"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TestPackageCard;
