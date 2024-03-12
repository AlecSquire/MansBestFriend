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
        <h4>Unleash the paw-sibilities with MansBestFreind!</h4>
        <p>
          At FetchMate, we're on a mission to connect dog owners with trusted
          and reliable dog walkers, sitters, and groomers in their local area.
          Whether your pup needs a leisurely stroll, a cozy home away from home,
          or a pampering grooming session, we've got you covered.
        </p>
        <p>
          Our platform is built by dog lovers, for dog lovers. We understand
          that every pooch is unique, which is why we're committed to providing
          personalized care and attention to every furry friend.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>Join the pack today!</h2>
        <Link className="link-button" to="..">
          Explore what we offer
        </Link>
      </div>
    </div>
  );
}
