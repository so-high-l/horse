import React from "react";
// import Web3 from "web3";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Section2 from "./pages/Section2";
import Morals from "./pages/Morals";
import Section4 from "./pages/Section4";
import SystemRewards from "./pages/SystemRewards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <Morals />
      <Section4 />
      <SystemRewards />
    </div>
  );
}

export default App;
