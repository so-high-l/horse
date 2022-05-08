import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <h2 className="logo">Horse</h2>
      <nav>
        <ul>
          <li>
            <a className="active" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">Docs</a>
          </li>
          <li>
            <a href="">Manifesto</a>
          </li>
          <li>
            <a href="">Chart</a>
          </li>
          <li>
            <a href="">Buy</a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Roadmap</a>
          </li>
          <li>
            <a href="">Join the community</a>
          </li>
        </ul>
      </nav>
      <button className="btn">
        <a href="">Launch App</a>
      </button>
    </div>
  );
}

export default Navbar;
