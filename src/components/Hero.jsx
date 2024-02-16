import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/christopher-ayme-ocZ-_Y7-Ptg-unsplash.jpg"; // Import the background image

export default function Hero() {
  const handleHeroButton = () => {};

  return (
    <div
      className="hero-div"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(${backgroundImage}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {" "}
      <h1> Welcome to MansBestFriend - Where Furry Friendships Begin!</h1>
      <p>
        We're matchmakers for furry friendships! Our mission is to bring joy and
        companionship into your life by connecting you with the perfect canine
        companion.
      </p>
      <Link to="/explore" className="button-link">
        <button className="button-hero">
          Your new best friend is this way!
        </button>
      </Link>
    </div>
  );
}
