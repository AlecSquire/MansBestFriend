import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ServiceDetail() {
  const { serviceId } = useParams();
  console.log(serviceId); // (DestructureserviceId directly from useParams

  const [services, setServices] = useState(null); // Initialize service state with null

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await fetch(`/api/services/${serviceId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch service");
        }
        const data = await res.json();
        setServices(data);
        console.log(data);
      } catch (error) {
        console.error("Error occurred while fetching service:", error);
      }
    }

    fetchService(); // Call fetchService function once when the component mounts
  }, []);
  return (
    <>
      <Link to="/explore"> Back to all services </Link>
      <div>
        <div className="ServiceCard">
          {services ? (
            <div key={services.id} className="service-item">
              <div className="image-wrapper" style={{ background: "red" }}>
                <img src={`/src/assets/${services.img}`} alt={services.name} />
                <p>{services.img}</p>
              </div>
              <div className="service-info">
                <h3>{services.name}</h3>
                <div> Average price £{services.price}</div>
                <p>{services.description}</p>
              </div>
            </div>
          ) : (
            <h2>Loading ...</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
