import "../App.css";
import ServiceCard from "./ServiceCard";
import ServicesHero from "../assets/ServicesHero.jpeg";

function Explore() {
  return (
    <>
      <div className="explore">
        <h3> Explore our services </h3>
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${ServicesHero})` }}
        ></div>
        <div className="exploreButtons">
          <button className="health">Health & Wellness </button>
          <button className="care">Care & Activities </button>
          <button className="assistance">Assistance</button>
          <p
            style={{
              color: "#4d4d4d",
              paddingBottom: ".7%",
              cursor: "pointer",
            }}
          >
            {" "}
            clear filters{" "}
          </p>{" "}
        </div>
      </div>
      <ServiceCard />
    </>
  );
}

export default Explore;
