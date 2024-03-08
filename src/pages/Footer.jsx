import About from "./About";
import Explore from "./Services/Explore";
import Contact from "./Contact";
import RandomDog from "./RandomDog";
import "../App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import MobileNav from "./MobileNav";
import { GiJumpingDog } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer-title">
      <NavLink className="site-logo" to="/">
        MansBestFriend
      </NavLink>
      <GiJumpingDog size="2rem" color="black" />
      <footer className="footer">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "#00B67A" : "inherit",
            };
          }}
          className="nav-links"
          to="/host"
        >
          Host Business
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "inherit",
            };
          }}
          className="nav-links"
          to="/about"
        >
          About us
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "inherit",
            };
          }}
          className="nav-links"
          to="/explore"
        >
          Explore our services
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "green" : "inherit",
            };
          }}
          className="nav-links"
          to="/contact"
        >
          Contact
        </NavLink>
      </footer>
    </div>
  );
}

export default Footer;
