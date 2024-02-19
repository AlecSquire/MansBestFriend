import React from "react";
import ServiceData from "./ServiceData.jsx";

function ServiceCard() {
  return (
    <div className="ServiceCard">
      {ServiceData().map((service, index) => (
        <div key={index}>
          {/* Use the imported images here */}
          {getImageByServiceName(service.name)}
          <h3>{service.name}</h3>
          <p>{service.price}</p>
          <div
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "200",
              width: "25rem",
              ...getButtonColor(service),
            }}
          >
            {service.filter}
          </div>
        </div>
      ))}
      <img src="src/assets/microchip.jpg" />
    </div>
  );
}

const getButtonColor = (service) => {
  let bgcolor;
  switch (service.filter) {
    case "Assistance":
      bgcolor = "#c7ac5a";
      break;
    case "Care & Activities":
      bgcolor = "#aaac43";
      break;
    default:
      bgcolor = "#5a511a";
  }
  return { backgroundColor: bgcolor };
};

// Function to get the correct image based on service name
function getImageByServiceName(serviceName) {
  switch (serviceName) {
    case "Grooming":
      return <img src={"src/assets/Groomers.jpg"} alt="Grooming" />;
    case "Microchipping":
      return <img src={"src/assets/microchip.jpg"} alt="Microchipping" />;
    case "Insurance":
      return <img src={"src/assets/Insurance.jpg"} alt="Insurance" />;
    case "Pet Photography":
      return (
        <img src={"src/assets/PetPhotography.jpg"} alt="Pet Photography" />
      );
    case "Dog Walking":
      return <img src={"src/assets/dogWalk.jpg"} alt="Dog Walking" />;
    case "Daycare":
      return <img src={"src/assets/DayCare.jpg"} alt="Daycare" />;
    case "Adoption":
      return <img src={"src/assets/adoptionRed.jpg"} alt="Adoption" />;
    case "Buy":
      return <img src={"src/assets/Buy.jpg"} alt="Buy" />;
    case "Breed Services":
      return <img src={"src/assets/breed.jpg"} alt="Breed Services" />;
    case "Vet Services":
      return <img src={"src/assets/VetServices.jpg"} alt="Vet Services" />;
    default:
      return null;
  }
}

export default ServiceCard;
