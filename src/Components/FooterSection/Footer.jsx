import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <GitHub />
        <LinkedIn />
      </div>
      <p> &copy; 2023 my-website</p>
    </div>
  );
}

export default Footer;
