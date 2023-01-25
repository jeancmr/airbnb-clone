import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <nav className="container">
      <Navbar />
      <Hero />
    </nav>
  );
}
