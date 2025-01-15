import React from "react";
import "./CardComponent.css";

const CardComponent = ({ 
  title, 
  description, 
  leftButtonLabel, 
  rightButtonLabel, 
  
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-placeholder"></div>
      </div>
      
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
      
        <div className="card-buttons">
          <button 
            className="button left-button" 
            
          >
            {leftButtonLabel}
          </button>
          <button 
            className="button right-button" 
            
          >
            {rightButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;