import React from "react";
import photoGrid from "../assets/photo-grid.png";

function Hero() {
  return (
    <section className="section-hero">
      <nav className="hero">
        <nav className="img-box">
          <img src={photoGrid} alt="Grid of photos" className="phtgrid-img" />
        </nav>
        <div className="text-box">
          <h1 className="hero-title">Online Experiences</h1>
          <p className="hero-paragraph">
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </nav>
    </section>
  );
}

export default Hero;
