import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/Connect";
import web3 from "web3";
import "../styles/Home.css";
function Home() {
  const { active, account, library, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <div className="Home">
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <div className="ellipse4"></div>
      <div className="ellipse5"></div>
      <div className="ellipse6"></div>
      <div className="ellipse7"></div>
      <div className="ellipse8"></div>
      <div className="rectangle2"></div>
      <div className="rectangle3"></div>
      <div className="rectangle7">
        <p> Remaining time</p>
        <p>15D : 12H : 45M</p>
      </div>
      <div className="hero">
        <h1 className="hero--title">
          An inventive POLAR fork on the Avalanche Blockchain
        </h1>
        <p className="hero--desc">
          HORSE protocol, the innovative project many didnt know they needed,
          inspired by POLAR and its long-term stability
        </p>
        <div className="hero--buttons">
          <button className="hero--btn">
            <a href="">Buy Horse</a>
          </button>
          <button className="hero--btn btn2" onClick={connect}>
            <a href="">Connect wallet</a>
          </button>
        </div>
        <div className="hero--stats">
          <div className="stat">
            <p className="stat--number">12K</p>
            <p className="stat--name">Players</p>
          </div>
          <div className="stat">
            <p className="stat--number">25K</p>
            <p className="stat--name">Horses</p>
          </div>
          <div className="stat">
            <p className="stat--number">$1,7</p>
            <p className="stat--name">$HORSE price</p>
          </div>
        </div>
      </div>
      <div className="rightsection"></div>
    </div>
  );
}

export default Home;
