import React from "react";
import "./Dialog.css";
import { dialogContent } from "../../data"; 

import { Button } from "../Button/Button"; 

function Dialog({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    if (onSubmit) onSubmit({ name, email });
  };

  return (
    <div className="dialog-container">
      <h2 className="dialog-title">{dialogContent.title}</h2>
      <form onSubmit={handleSubmit} className="dialog-form">
        <div className="dialog-input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={dialogContent.namePlaceholder}
            className="dialog-input"
          />
        </div>
        <div className="dialog-input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={dialogContent.emailPlaceholder}
            className="dialog-input"
          />
        </div>
        {/* Use the reusable button component */}
        <Button type="primary" label="Submit"  className="dialog-button "/>
      </form>
    </div>
  );
}

export default Dialog;
