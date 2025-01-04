import React from "react";
import "./InputBox.css";

const InputBox = ({ placeholder, value, onChange }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
