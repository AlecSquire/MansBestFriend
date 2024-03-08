import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import About from "../pages/About";

function Header() {
  return (
    <>
      <header>
        <Nav />
        <Link to="/"> Home</Link>
        <Link to="/About"> About </Link>
        <Outlet />
      </header>
    </>
  );
}

export default Header;
