import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Section2 from "./pages/Section2";
import Morals from "./pages/Morals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Section2 />
      <Morals />
    </div>
  );
}

export default App;
