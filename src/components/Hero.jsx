import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import rating from "../assets/rating.webp";
import FormServices from "../components/FormServices";
import backgroundImage from "../assets/dog-walking.jpeg"; // Import the background image
import dogOwner1 from "../assets/dog-owner1.jpg";
import dogOwner2 from "../assets/dogOwner2.jpg";
import app from "../assets/advert-app-image.webp";
import apple from "../assets/app-store.svg";
import google from "../assets/google-play.svg";
import { FaHome, FaHouseUser, FaDog, FaPaw } from "react-icons/fa";
import { GiJumpingDog } from "react-icons/gi";

export default function Hero() {
  const handleHeroButton = () => {};

  return (
    <>
      <div
        className="hero-div"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(${backgroundImage}) no-repeat center center`,
          backgroundSize: "cover",
          height: "20rem",
        }}
      >
        {" "}
        <h1> Loving Pet Care in Your Neighbourhood</h1>
        <div className="button-hero_container">
          <Link to="/explore" className="button-link">
            <button className="button-hero">Business Owner?</button>
          </Link>

          <Link to="/contact">
            <button className="button-hero">Dog Owner?</button>
          </Link>
          <img src={rating} />
        </div>
      </div>
      <FormServices />

      <>
        <div
          className="servicesListContainer"
          style={{
            maxWidth: "100vw",
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={dogOwner1}
            style={{
              padding: "10px",
              maxWidth: "calc(50% - 20px)",
              flex: "1 0 auto",
              objectFit: "cover",
            }}
          />
          <img
            src={dogOwner2}
            style={{
              padding: "10px",
              maxWidth: "calc(50% - 20px)",
              flex: "1 0 auto",
            }}
          />
        </div>
        <div className="servicesHero" style={{ textAlign: "left" }}>
          <h3 style={{ color: "green", textAlign: "center" }}>
            {" "}
            Just some of what we offer!{" "}
          </h3>
          <Link to="/explore" className="button-link">
            <button className="button">
              Explore our full list of services!
            </button>
          </Link>
          <div className="service">
            <FaHome />
            <h5>Boarding</h5>
            <p>
              Your pets stay overnight in your sitter’s home. They’ll be treated
              like part of the family in a comfortable environment.
            </p>
          </div>

          <div className="service">
            <FaHouseUser />
            <h5>House Sitting</h5>
            <p>
              Your sitter takes care of your pets in your home. Your pets will
              get all the attention they need without leaving home.
            </p>
          </div>

          <div className="service">
            <GiJumpingDog />
            <h5>Dog Walking</h5>
            <p>
              Your dog gets a walk around your local area. Perfect for busy days
              and dogs with extra energy to burn.
            </p>
          </div>

          <div className="service">
            <FaDog />
            <h5>Doggy Day Care</h5>
            <p>
              Your dog spends the day at your sitter’s home. Drop them off in
              the morning and pick up a happy pup in the evening.
            </p>
          </div>

          <div className="service">
            <FaPaw />
            <h5>Drop-In Visits</h5>
            <p>
              Your sitter drops by your home to play with your pets, offer food,
              and give toilet breaks or clean the litter tray.
            </p>
          </div>
        </div>
        <h3 style={{ color: "grey" }}> Download our App!</h3>
        <div
          className="appAdvert"
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "60rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <img src={apple} style={{ flex: "1 1 auto" }} />
            <img src={google} style={{ flex: "1 1 auto" }} />
          </div>
          <img src={app} style={{ flex: "1 1 auto" }} />
        </div>
      </>
    </>
  );
}
