import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsData from "./data";
// import katie from "./assets/katie-zaferes.png";
// import wedding from "./assets/wedding.png";
// import bike from "./assets/mountain-bike.png";

export default function App() {
  const cardElements = cardsData.map((card) => (
    <Card
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
    />
  ));
  return (
    <nav className="container">
      <Navbar />
      <Hero />
      <section className="section-cards">{cardElements}</section>
    </nav>
  );
}
