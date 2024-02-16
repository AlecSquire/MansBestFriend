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

function Nav() {
  const [desktop, setDesktop] = useState(true);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 590);
    };

    // Set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHamburger = () => {
    setClick(!click);
    console.log(click);
  };

  if (desktop) {
    return (
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
        <Link className="nav-links" to="/explore">
          Explore our services
        </Link>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </header>
    );
  } else {
    return (
      <header className="mobile-nav-bar">
        <Link className="site-logo" to="/">
          MansBestFriend
        </Link>
        {click ? (
          <FiAlignJustify
            className="HamburgerMenu"
            size="5rem"
            color="black"
            onClick={handleHamburger}
          />
        ) : (
          <>
            <MdClose
              className="HamburgerMenu"
              size="30px"
              color="black"
              onClick={handleHamburger}
            />
            <div className="hamburgerDown">
              {" "}
              <Link
                onClick={handleHamburger}
                className="hamnburger-nav-links"
                to="/dogs"
              >
                Meet our dogs
              </Link>
              <Link
                onClick={handleHamburger}
                className="hamnburger-nav-links"
                to="/about"
              >
                About us
              </Link>
              <Link
                onClick={handleHamburger}
                className="hamnburger-nav-links"
                to="/explore"
              >
                Explore our services
              </Link>
              <Link
                onClick={handleHamburger}
                className="hamnburger-nav-links"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </>
        )}
      </header>
    );
  }
}

export default Nav;
