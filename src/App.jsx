import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import RandomDog from "./components/RandomDog";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <header className="nav-bar">
            <Link className="site-logo" to="/">
              MansBestFriend
            </Link>
            <Link className="nav-links" to="/dogs">
              Meet our dogs
            </Link>
            <Link className="nav-links" to="/about">
              About us
            </Link>
            <Link className="nav-links" to="/Explore">
              Explore our services
            </Link>
          </header>

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/dogs" element={<RandomDog />} />
            <Route path="/Explore" element={<Explore />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
