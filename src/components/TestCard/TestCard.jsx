import React from "react";
import "./TestCard.css";

const TestCard = ({ test }) => {
  return (
    <div className="test-card">
      {test.logo ? (
        <div className="card-logo">
          <img src={test.logo} alt={test.arabicName || test.name} />
        </div>
      ) : (
        <div className="card-icon">🔬</div>
      )}

      <h3 className="card-title">{test.arabicName || test.name}</h3>
      <p className="card-description">
        {test.arabicDescription || test.description || "لا يوجد وصف متوفر"}
      </p>
    </div>
  );
};

export default TestCard;
