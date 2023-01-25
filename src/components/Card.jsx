import React from "react";
import star from "../assets/star.png";
import swimmer from "../assets/katie-zaferes.png";

export default function Card() {
  return (
    <section className="section-cards">
      <div className="card">
        <img src={swimmer} alt="photo of swimmer" className="card-img" />
        <div className="card-text-box">
          <div className="card-rating">
            <img src={star} alt="star icon" className="star-img" />
            <span>5.0</span>
            <span>&#40;6&#41;</span>
            <span>&#8226;</span>
            <span>USA</span>
          </div>
          <p>Life lessons with Katie Zaferes</p>
          <p>
            <strong>From $136</strong> / person
          </p>
        </div>
      </div>
    </section>
  );
}
