import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/picturepatch07/">
          <Instagram />
        </a>
        <a href="https://twitter.com/picturepatch07">
          <Twitter />
        </a>
        <a href="https://github.com/picturepatch07">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/abhishek-anand-284a9520a/">
          <LinkedIn />
        </a>
      </div>
      <p> &copy; 2023 my-website</p>
    </div>
  );
}

export default Footer;
