import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";
function Navbar() {
  const test = window.location.pathname == "/" ? "active" : "null";
  console.log(window.location.pathname);
  console.log(test);

  const [respNavBar, setRespNavBar] = useState(false);
  function toggleRespNavBar() {
    setRespNavBar((prevState) => !prevState);
  }
  function clickMask() {
    setRespNavBar(false);
  }
  return (
    <div className="Navbar">
      <div className={respNavBar ? "RespNavbar active" : "RespNavbar "}>
        <ul>
          <h2 className="logo">Horse</h2>
          <li>
            <a className="" href="#home">
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
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#join">Join the community</a>
          </li>
          <li>
            <a href="">Launch App</a>
          </li>
        </ul>
      </div>
      <div
        className={respNavBar ? "mask active" : "mask "}
        onClick={clickMask}
      ></div>
      <h2 className="logo">Horse</h2>
      <nav>
        <ul>
          <li>
            <a className="" href="#home">
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
            <a className="" href="#roadmap">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#join">Join the community</a>
          </li>
        </ul>
      </nav>
      <button className="btn">
        <a href="">Launch App</a>
      </button>
      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleRespNavBar}
        className="logomenu"
      />
    </div>
  );
}

export default Navbar;
