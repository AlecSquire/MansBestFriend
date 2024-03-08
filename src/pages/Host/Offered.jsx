import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ServicesOffered from "./ServicesOffered";

function Offered() {
  const { serviceId } = useParams();
  console.log(serviceId);
  const [services, setServices] = useState(null);

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await fetch(`/api/host/offered/${serviceId}`);
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
  }, [serviceId]);
  const getButtonColor = (services) => {
    let bgcolor;
    switch (services.filter) {
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
      <Link to={"/host/offered"}> Back to all </Link>
      <div
        className="master-offered-container"
        style={{
          display: "flex",
          padding: "1rem",
          alignContent: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div className="ServiceCardOffered">
            {services ? (
              <div key={services.id} className="service-item">
                <div className="image-wrapper-offered">
                  <img
                    src={`/src/assets/${services.img}`}
                    alt={services.name}
                  />
                </div>
                <div className="service-info">
                  <h3>{services.name}</h3>
                  <div> Average price £{services.price}</div>
                  <p>{services.description}</p>
                  <button
                    className="service-button"
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "200",
                      maxWidth: "100%",
                      textDecoration: "none",
                      borderRadius: "10px",
                      backgroundColor: getButtonColor(services).backgroundColor,
                    }}
                  >
                    {services.filter}
                  </button>
                </div>
              </div>
            ) : (
              <h2>Loading ...</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Offered;
