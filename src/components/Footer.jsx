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
import { GiJumpingDog } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer-title">
      <Link className="site-logo" to="/">
        MansBestFriend
      </Link>
      <GiJumpingDog size="2rem" color="black" />
      <footer className="footer">
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
