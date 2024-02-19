import About from "./About";
import Explore from "./Explore";
import Contact from "./Contact";
import RandomDog from "./RandomDog";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";

function Footer() {
  return (
    <div className="footer-title">
      <h1>Footer</h1>
      <footer className="footer">
        <Link className="site-logo" to="/">
          MansBestFriend
        </Link>
        <Link className="nav-links" to="/dogs">
          Meet our happy customers
        </Link>
        <Link className="nav-links" to="/about">
          About us
        </Link>
        <Link className="nav-links" to="/explore">
          Explore our services
        </Link>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
