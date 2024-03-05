import "../App.css";
import ServiceDetail from "./ServiceDetail";
import ServicesHero from "../assets/ServicesHero.jpeg";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Explore() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(`/api/services`);
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await res.json();
        setServices(data);
        console.log(services);
      } catch (error) {
        console.error(error);
      }
    }

    fetchServices();
  }, []);

  const getButtonColor = (service) => {
    let bgcolor;
    switch (service.filter) {
      case "Assistance":
        bgcolor = "#c7ac5a";
        break;
      case "Care":
        bgcolor = "#aaac43";
        break;
      default:
        bgcolor = "#5a511a";
    }
    return { backgroundColor: bgcolor };
  };

  return (
    <>
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
            Explore our services
          </h3>
          {/* Explore buttons */}
          <div
            className="exploreButtons"
            style={{
              position: "absolute",
              bottom: "10%",
              left: "0%",
              zIndex: 2,
            }}
          >
            <Link to="/Service/health">
              <button className="health">Health & Wellness</button>
            </Link>
            <Link to="/Service/care">
              <button className="care">Care & Activities</button>
            </Link>
            <Link to="/Service/assistance">
              <button className="assistance">Assistance</button>
            </Link>
            <p
              style={{
                color: "#4d4d4d",
                paddingBottom: ".7%",
                cursor: "pointer",
              }}
            >
              clear filters
            </p>
          </div>
        </div>
      </div>
      (
      <div className="ServiceCard">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <Link to={`/services/${service.id}`}>
              <div className="image-wrapper">
                <img src={`/src/assets/${service.img}`} alt={service.name} />
              </div>
            </Link>
            <div className="service-info">
              <h3>{service.name}</h3>
              <div> Average price £{service.price}</div>
              <p>{service.description}</p>

              <button
                className="service-button"
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "200",
                  maxWidth: "100%",
                  textDecoration: "none",
                  borderRadius: "10px",
                  backgroundColor: getButtonColor(service).backgroundColor,
                }}
              >
                {service.filter}
              </button>
            </div>
          </div>
        ))}
      </div>
      )
    </>
  );
}

export default Explore;
