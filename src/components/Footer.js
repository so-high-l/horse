import React from "react";

import "../styles/Footer.css";
import joincomm from "../assets/JOINCOMMUNITY.png";
function Footer() {
  return (
    <div className="Footer" id="join">
      <img src={joincomm} alt="" id="footerimg" />
    </div>
  );
}

export default Footer;
