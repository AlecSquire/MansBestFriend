import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function ServicesOffered() {
  const { serviceId } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch(`/api/host/offered`);
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await res.json();
        setData(data);
        console.log(Data); // Logging the updated data directly
      } catch (error) {
        console.error(error);
      }
    }
    fetchServices();
  }, [serviceId]); // Dependency added to trigger effect when serviceId changes

  return (
    <>
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
        <h1 style={{ color: "black" }}>Your listed services </h1>

        {Data.map((el) => (
          <>
            <Link
              to={`/host/offered/${el.id}`}
              key={serviceId}
              className="img-offered-container"
              style={{ textDecoration: "unset", color: "white" }}
            >
              {" "}
              <div
                className="img-offered-container"
                style={{
                  flex: "1",
                  display: "flex",

                  height: "20rem",
                  textAlign: "left",

                  marginBottom: "2rem",
                  backgroundColor: "white",
                  overflow: "hidden",
                }}
              >
                <div
                  key={el.id}
                  className="offered-img"
                  style={{
                    backgroundImage: `url(/src/assets/${el.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "50%",
                    height: "100%",
                  }}
                >
                  <h1 style={{}}>{el.name}</h1>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      padding: "0.5rem",
                    }}
                  >
                    <Link
                      to={`/host/offered/${el.id}`}
                      key={serviceId}
                      className="img-offered-container"
                      style={{
                        textDecoration: "unset",
                        color: "black",
                        size: "5rem",
                        marginLeft: "13rem",
                      }}
                    >
                      Click here for more details{" "}
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

export default ServicesOffered;
