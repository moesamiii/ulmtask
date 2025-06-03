import React from "react";
import "./StickyButton.css";

const StickyButton = ({ label, icon, phoneNumber, message }) => {
  const handleClick = () => {
    if (!phoneNumber) return;

    // Construct the WhatsApp URL
    let url = `https://wa.me/${phoneNumber}`;

    // If you want to send a predefined message, encode it in URL
    if (message) {
      url += `?text=${encodeURIComponent(message)}`;
    }

    // Open WhatsApp chat in a new tab
    window.open(url, "_blank");
  };

  return (
    <button className="sticky-button" onClick={handleClick}>
      {icon && <span className="sticky-icon">{icon}</span>}
      {label}
    </button>
  );
};

export default StickyButton;
