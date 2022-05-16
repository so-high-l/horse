import React from "react";
import "../styles/Section4.css";
import horsesystem from "../assets/horsesystem.png";
function Section4() {
  return (
    <div className="Section4">
      <div className="textleft">
        <h2>The HORSE DANO Reward System</h2>
        <p className="section4--rewards">
          Rewards are based on the community's voice. <br />
          Our investments in low-risk DeFi projects contribute in our long-term
          sustainability plan.
        </p>
      </div>
      <div className="section4--bg--container">
        <img src={horsesystem} alt="" className="section4--bg" />
      </div>
      <div className="readmore">
        <div className="rectangle23"> </div>
        <div className="rectangle24">
          <a href="">Read more about our whitepaper</a>
        </div>
      </div>
    </div>
  );
}

export default Section4;
