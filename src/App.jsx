import React from "react";
import Footer from "./components/Footer";
import "./App.css";
import ServiceCard from "./components/ServiceCard";
import About from "./components/About";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import RandomDog from "./components/RandomDog";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Nav />

          {/* <MobileNav /> */}

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/dogs" element={<RandomDog />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
