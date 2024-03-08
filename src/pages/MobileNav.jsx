import About from "./About";
import Explore from "./Services/Explore";
import Contact from "./Contact";
import RandomDog from "./RandomDog";
import "../App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function MobileNav() {
  return (
    <header className="nav-bar">
      <Link className="site-logo" to="/">
        MansBestFriend
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
    </header>
  );
}

export default MobileNav;
