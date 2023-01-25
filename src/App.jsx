import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katie from "./assets/katie-zaferes.png";

export default function App() {
  return (
    <nav className="container">
      <Navbar />
      <Hero />
      <Card
        img={katie}
        rating="5.0"
        reviewCount={6}
        country="Colombia"
        title="Life Lesson with Katie Zaferes"
        price={136}
      />
    </nav>
  );
}
