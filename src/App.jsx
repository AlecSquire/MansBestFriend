import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import RandomDog from "./components/RandomDog";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <Nav className="nav-bar" />
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/random-dog" element={<RandomDog />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
