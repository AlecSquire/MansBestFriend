import React from "react";
import Footer from "./components/Footer";
import "./App.css";
import ServiceDetail from "./components/ServiceDetail";
// import ServiceCard from "./components/ServiceCard";

import About from "./components/About";
import Explore from "./components/Explore";
import Contact from "./components/Contact";
import RandomDog from "./components/RandomDog";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import Service from "./components/Service";

// import { makeServer } from "./mirageServer"; // Import the MirageJS server setup

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />

            <Route path="/explore" element={<Explore />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route
              path="/Service/health"
              element={<Service service="Health" />}
            />
            <Route path="/Service/care" element={<Service service="Care" />} />
            <Route
              path="/Service/assistance"
              element={<Service service="Assistance" description />}
            />

            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
