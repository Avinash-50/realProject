import React from "react";
import "./Footer.css";

function Footer({ footerLinks, socialLinks }) {
  return (
    <div className="Footer_section">
      <div className="Footer_links">
        {footerLinks.map((section, index) => (
          <div key={index} className="Footer_section_item">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="Footer_bottom_section">
        <div className="Footer_logo">
          <img src="/logo.png" alt="Logo" className="Footer_logo_img" />
          <p>Picass0 @ 2024. All rights reserved.</p>
        </div>

        <div className="Footer_made_with">
          <p>
            Made with <span className="heart">❤</span>
          </p>
        </div>

        <div className="Footer_social_links">
          {socialLinks.map((social, socialIndex) => (
            <a key={socialIndex} href={social.url} title={social.name}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
