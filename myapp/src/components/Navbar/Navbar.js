import React from "react";
import "./Navbar.css";
import { PiDiscordLogoThin } from "react-icons/pi";


const Navbar = ({ logo, links, showDiscord }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Website Logo" className="navbar-image" />
      </div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      {showDiscord && (
        <div className="dis_logo">
          <PiDiscordLogoThin />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
