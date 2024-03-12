import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ServicesOffered from "./ServicesOffered";
import Details from "./HostNav/Details";

function Offered() {
  const { serviceId } = useParams();
  console.log(serviceId);
  const [services, setServices] = useState(null);
  const [show, setShow] = useState(false);

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

  {
    if (!services) return <h1 style={{ color: "black" }}>Loading...</h1>;
  }

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
      <div className="offered-master">
        <Link to={".."} relative="path">
          {" "}
          Back to all{" "}
        </Link>
        {services ? (
          <div key={services.id} className="image-wrapper-offered">
            <img src={`/src/assets/${services.img}`} alt={services.name} />
            <div className="offered-name">
              <h3>{services.name}</h3>
              <h4> Average price £{services.price}/Unit</h4>

              <button
                className="service-button"
                style={{
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

      <nav className="host-nav" style={{ backgroundColor: "white" }}>
        <NavLink
          end
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#161616" : "black",
            };
          }}
          to={"."}
        >
          Details{" "}
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#161616" : "black",
            };
          }}
          to={"Photos"}
        >
          Photos
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#161616" : "black",
            };
          }}
          to={"pricing"}
        >
          Pricing
        </NavLink>
      </nav>
      <Outlet context={[services, setServices]} />
    </>
  );
}

export default Offered;
