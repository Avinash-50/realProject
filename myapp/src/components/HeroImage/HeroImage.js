import React from "react";
import "./HeroImage.css";

function HeroImage({ heroData }) {
  return (
    <div className="HeroImage_section">
      <h2 className="heading">{heroData.heading}</h2>
      <p className="description">{heroData.description}</p>
      <button className="btn">{heroData.buttonText}</button>
    </div>
  );
}

export default HeroImage;
