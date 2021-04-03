import React from "react";

import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

import "./HomseScreen.css";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
    </div>
  );
}

export default HomeScreen;
