import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
