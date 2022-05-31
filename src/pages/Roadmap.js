import React from "react";
import "../styles/Roadmap.css";
import n1 from "../assets/1.png";
import n2 from "../assets/2.png";
import n3 from "../assets/3.png";
import n4 from "../assets/4.png";
import line1 from "../assets/line1.png";
import line2 from "../assets/line2.png";
import line3 from "../assets/line3.png";
function Roadmap() {
  return (
    <div className="Roadmap" id="roadmap">
      <img src={n1} alt="" className="number number1" />
      <img src={n2} alt="" className="number number2" />
      <img src={n3} alt="" className="number number3" />
      <img src={n4} alt="" className="number number4" />
      <img src={line1} alt="" className="line line1" />
      <img src={line2} alt="" className="line line2" />
      <img src={line3} alt="" className="line line3" />
      <div className="text text1">
        <p>Launch of the project</p>
      </div>
      <div className="text text2">
        <p>Update of the contract & Tier Breed levels</p>
      </div>
      <div className="text text3">
        <p>Implement the NFT’s and marketplace</p>
      </div>
      <div className="text text4">
        <p>Lucky Boxes launch</p>
      </div>
      <div className="line4"></div>
    </div>
  );
}

export default Roadmap;
