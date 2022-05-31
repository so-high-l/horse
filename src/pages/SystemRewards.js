import React from "react";
import "../styles/SystemRewards.css";
import warmblood from "../assets/warmblood.png";
import appaloosa from "../assets/appaloosa.png";
import mustang from "../assets/mustang.png";
import morgan from "../assets/morgan.png";
function SystemRewards() {
  return (
    <div className="SystemRewards">
      <p className="SystemRewards--subtitle">
        Because we want to be accessible for every wallet and every goal.
      </p>
      <h2 className="SystemRewards--title">
        We have created 4 different breeds system reward.{" "}
      </h2>
      <div className="breeds">
        <div className="breed right">
          <div className="breed--stats">
            <div>
              <p className="breed--name">Warmblood</p>
              <p className="breed--info">Level 4</p>
            </div>
            <div>
              <p className="breed--roi">2,3</p>
              <p className="breed--info">Roi/day</p>
            </div>
            <div>
              <p className="breed--cost">400</p>
              <p className="breed--info">$HORSE</p>
            </div>
          </div>
          <div className="breed--img">
            <img src={warmblood} alt="" />
          </div>
        </div>
        <div className="breed left">
          <div className="breed--img">
            {" "}
            <img src={appaloosa} alt="" />
          </div>
          <div className="breed--stats">
            <div>
              <p className="breed--name">Appaloosa</p>
              <p className="breed--info">Level 3</p>
            </div>
            <div>
              <p className="breed--roi">2</p>
              <p className="breed--info">Roi/day</p>
            </div>
            <div>
              <p className="breed--cost">250</p>
              <p className="breed--info">$HORSE</p>
            </div>
          </div>
        </div>
        <div className="breed right">
          <div className="breed--stats">
            <div>
              <p className="breed--name">Mustang</p>
              <p className="breed--info">Level 2</p>
            </div>
            <div>
              <p className="breed--roi">1,8</p>
              <p className="breed--info">Roi/day</p>
            </div>
            <div>
              <p className="breed--cost">55</p>
              <p className="breed--info">$HORSE</p>
            </div>
          </div>
          <div className="breed--img">
            <img src={mustang} alt="" />
          </div>
        </div>
        <div className="breed left">
          <div className="breed--img">
            {" "}
            <img src={morgan} alt="" />
          </div>
          <div className="breed--stats">
            <div>
              <p className="breed--name">Morgan</p>
              <p className="breed--info">Level 1</p>
            </div>
            <div>
              <p className="breed--roi">1,5</p>
              <p className="breed--info">Roi/day</p>
            </div>
            <div>
              <p className="breed--cost">30</p>
              <p className="breed--info">$HORSE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemRewards;
