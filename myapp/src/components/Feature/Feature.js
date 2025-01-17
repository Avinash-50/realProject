import React from "react";
import "./Feature.css";

const Feature = ({
    title,
    description,
    imageSrc,

})=>{
    return(
        <div className="Feature_section">
        <div className="left_section">
            <h3 className="Heading">{title}</h3>
            <p className="descrption">{description}</p>
        </div>

        <div className="right_section">
        <img src={imageSrc} alt=""  className="image" />

        </div>
            
        </div>
    )
}

export default Feature;

