// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// function ServiceCard() {
//   const params = useParams;
//   console.log(params.id);

//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     async function fetchServices() {
//       try {
//         const res = await fetch(`api/services`);
//         //:id
//         if (!res.ok) {
//           throw new Error("Failed to fetch services");
//         }
//         const data = await res.json();
//         setServices(data);
//         console.log(services);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchServices();
//   }, []);

//   return <></>;
// }

// export default ServiceCard;

//   return (
//     <div className="ServiceCard">
//       {services.map((service, index) => (
//         <div key={index} className="service-item">
//           <div className="image-wrapper">
//             <Link to={`/services/${service.name}`}>
//               {getImageByServiceName(service.name)}
//             </Link>
//           </div>
//           <div className="service-info">
//             <Link to={`/services/${service.name}`}>
//               <h3>{service.name}</h3>
//               <p>{service.price}</p>
//             </Link>
//             <div
//               className="service-button"
//               style={{
//                 color: "white",
//                 textAlign: "center",
//                 fontWeight: "200",
//                 maxWidth: "100%",
//                 textDecoration: "none",
//                 borderRadius: "10px",
//                 ...getButtonColor(service),
//               }}
//             >
//               {service.filter}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const getButtonColor = (service) => {
//   let bgcolor;
//   switch (service.filter) {
//     case "Assistance":
//       bgcolor = "#c7ac5a";
//       break;
//     case "Care & Activities":
//       bgcolor = "#aaac43";
//       break;
//     default:
//       bgcolor = "#5a511a";
//   }
//   return { backgroundColor: bgcolor };
// };

// // Function to get the correct image based on service name
// function getImageByServiceName(serviceName) {
//   switch (serviceName) {
//     case "Grooming":
//       return <img src={"/assets/Groomers.jpg"} alt="Grooming" />;
//     case "Microchipping":
//       return <img src={"/assets/microchip.jpg"} alt="Microchipping" />;
//     case "Insurance":
//       return <img src={"/assets/Insurance.jpg"} alt="Insurance" />;
//     case "Pet Photography":
//       return <img src={"/assets/PetPhotography.jpg"} alt="Pet Photography" />;
//     case "Dog Walking":
//       return <img src={"/assets/dogWalk.jpg"} alt="Dog Walking" />;
//     case "Daycare":
//       return <img src={"/assets/DayCare.jpg"} alt="Daycare" />;
//     case "Adoption":
//       return <img src={"/assets/adoptionRed.jpg"} alt="Adoption" />;
//     case "Buy":
//       return <img src={"/assets/Buy.jpg"} alt="Buy" />;
//     case "Breed Services":
//       return <img src={"/assets/breed.jpg"} alt="Breed Services" />;
//     case "Vet Services":
//       return <img src={"/assets/VetServices.jpg"} alt="Vet Services" />;
//     default:
//       return null;
//   }
