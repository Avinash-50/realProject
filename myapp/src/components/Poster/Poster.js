import React from "react";
import "./Poster.css";

function Poster({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div className="Poster_Container" key={item.id}>
          <div className="Poster">
            <div className="logo" style={item.logoStyle}></div>
            <h4 className="Heading">{item.heading}</h4>
            <p className="SubHeading">{item.subheading}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Poster;
