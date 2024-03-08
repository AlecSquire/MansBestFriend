import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesHero from "../assets/dog-owner1.jpg";

function Service({ service }) {
  return (
    <div>
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${ServicesHero})`,
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.5)", // White semi-transparent overlay
            zIndex: 1, // Ensure the overlay is above the image
          }}
        ></div>
        <div className="explore" style={{ fontFamily: "inter, sans-serif" }}>
          {/* Explore our services text */}
          <h3
            style={{
              color: "black",
              position: "absolute",
              top: "10%",
              left: "-0%",
              zIndex: 2,
              fontWeight: 500,
            }}
          >
            {" "}
            {service}{" "}
          </h3>
        </div>
      </div>
      <Link to="/Service/health">
        <button className="health">Health & Wellness</button>
      </Link>
      <Link to="/Service/care">
        <button className="care">Care & Activities</button>
      </Link>
      <Link to="/Service/assistance">
        <button className="assistance">Assistance</button>
      </Link>
    </div>
  );
}

export default Service;
