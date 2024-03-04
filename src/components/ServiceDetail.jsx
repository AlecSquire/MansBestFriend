import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ServiceDetail() {
  const { id } = useParams(); // Destructure id directly from useParams

  const [service, setService] = useState(null); // Initialize service state with null

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await fetch(`api/services/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch service");
        }
        const data = await res.json();
        setService(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      fetchService();
    }
  }, [id]);
  console.log(id);
  return (
    <div>
      <div className="ServiceCard">
        {service && (
          <div key={service.id} className="service-item">
            <div className="image-wrapper">
              <img src={`src/assets/${service.img}`} alt={service.name} />
            </div>
            <div className="service-info">
              <h3>{service.name}</h3>
              <div>£{service.price}</div>
              <p>{service.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetail;
