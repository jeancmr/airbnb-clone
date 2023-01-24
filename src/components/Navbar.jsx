import React from "react";
import bnbLogo from "../assets/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="main-navbar">
      <img src={bnbLogo} alt="Airbnb logo" className="airbnb-logo" />
    </nav>
  );
}

export default Navbar;
