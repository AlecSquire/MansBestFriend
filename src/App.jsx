import React from "react";
import Footer from "./pages/Footer";
import "./App.css";
import ServiceDetail from "./pages/Services/ServiceDetail";
// import ServiceCard from "./pages/ServiceCard";

import About from "./pages/About";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Explore from "./pages/Services/Explore";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Host/DashBoard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import RandomDog from "./pages/RandomDog";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import Hero from "./pages/Hero";
import MobileNav from "./pages/MobileNav";
import Nav from "./pages/Nav";
import Service from "./pages/Service";
import HostLayout from "./components/HostLayout";
import Offered from "./pages/Host/Offered";
import ServicesOffered from "./pages/Host/ServicesOffered";

// import { makeServer } from "./mirageServer"; // Import the MirageJS server setup

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Hero />} />
              <Route path="/about" element={<About />} />

              <Route path="/explore" element={<Explore />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route
                path="/Service/health"
                element={<Service service="Health" />}
              />
              <Route
                path="/Service/care"
                element={<Service service="Care" />}
              />
              <Route
                path="/Service/assistance"
                element={<Service service="Assistance" description />}
              />

              <Route path="Host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="Income" element={<Income />} />
                <Route path="Reviews" element={<Reviews />} />
                <Route path="Offered" element={<ServicesOffered />} />
                <Route path="Offered/:serviceId" element={<Offered />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
