import React from "react";
import bgImg from "../assets/kojirou-sasaki-Tx7cJ3t207k-unsplash.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-hero-container">
        <img src={bgImg} className="about-hero-image" alt="About Hero" />
      </div>
      <div className="about-page-content">
        <h1>
          Don’t settle for a kennel when you could pamper your pooch in a
          mansion.
        </h1>
        <p>
          Our mission is to provide top-notch housing solutions for dogs of all
          breeds. From cozy beds to spacious play areas, we ensure that your
          furry friend feels right at home.
        </p>
        <p>
          Our team consists of passionate dog lovers who understand the
          importance of creating a safe and comfortable environment for every
          dog.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>Your dog's dreams await.</h2>
        <Link className="link-button" to="/Random-Dog">
          Explore what we offer
        </Link>
      </div>
    </div>
  );
}
