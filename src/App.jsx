import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <nav className="container">
      <Navbar />
      <Hero />
      <Card />
    </nav>
  );
}
