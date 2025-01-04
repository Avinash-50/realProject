import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import "./HoverCard.css";

function HoverCard({ cardData }) {
  return (
    <div>
      {cardData.map((item, index) => (
        <div key={index} className="CardHover_Container">
          <div className="CardHover_Content">
            <div className="logo" style={item.logoStyle}></div>
            <div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p><MdOutlineCalendarMonth /> <span>{item.joinDate}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HoverCard;
