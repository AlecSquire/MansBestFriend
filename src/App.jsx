import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import RandomDog from "./components/RandomDog";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="nav-bar-container">
        <Nav className="nav-bar" />
        <h1> checking github is updating</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/random-dog" element={<RandomDog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
