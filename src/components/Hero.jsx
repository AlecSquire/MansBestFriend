import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/christopher-ayme-ocZ-_Y7-Ptg-unsplash.jpg"; // Import the background image

export default function Hero() {
  const handleHeroButton = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="hero-div"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(${backgroundImage}) no-repeat center center`,
      }}
    >
      {" "}
      <h1> Welcome to MansBestFriend - Where Furry Friendships Begin!</h1>
      <p>
        We're matchmakers for furry friendships! Our mission is to bring joy and
        companionship into your life by connecting you with the perfect canine
        companion.
      </p>
      <button className="button-hero" onClick={handleHeroButton}>
        <Link to="RandomDogs" className="button-link"></Link>
        Your new best friend is this way!
      </button>
    </div>
  );
}
