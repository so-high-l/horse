import React from "react";
import "../styles/Morals.css";
function Morals() {
  return (
    <div className="Morals">
      <h2 className="Morals--title">OUR MORALS</h2>
      <div className="morals">
        <div className="moral">
          <h2 className="moral--title">Clarity</h2>
          <p className="moral--text">
            Our most significant resource is the trust that is set in us from
            our local area. We will constantly endeavour to make the wisest
            choices and to act with the greatest amount of clarity. All
            decisions or issues will be examined and settled on by the HORSE
            community.
          </p>
        </div>
        <div className="moral moral2">
          <h2 className="moral--title">Availability</h2>
          <p className="moral--text">
            All our contracts are public and can be modified by the community.{" "}
            <br />
            The treasuray is locked with a mulitsig and all the tokens teams are
            locked for 6 months.
          </p>
        </div>
        <div className="moral">
          <h2 className="moral--title">Curiosity</h2>
          <p className="moral--text">
            With a fast changing environment of Decentralised Finance, staying
            up to date with every small change in the field is a must, and this
            is a perfect opportunity for us to showcase our thirst for knowledge
            by always asking the right questions, making us a step closer to our
            mission.
          </p>
        </div>
      </div>
      <button className="Morals--btn">
        <a href="">Find our manifesto here</a>
      </button>
    </div>
  );
}

export default Morals;
