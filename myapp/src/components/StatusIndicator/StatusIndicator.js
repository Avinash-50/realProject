import React from "react";
import "./StatusIndicator.css";

function StatusIndicator({ imageSrc, altText, description }) {
  return (
    <div className="box">
      <div>
        <img src={imageSrc} alt={altText} />
      </div>
      <p className="subheading">{description}</p>
    </div>
  );
}

export default StatusIndicator;
