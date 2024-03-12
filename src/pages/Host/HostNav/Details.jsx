import { useOutletContext } from "react-router-dom";

function Details() {
  const [services, setServices] = useOutletContext();
  return (
    <div
      style={{
        textAlign: "left",
        marginLeft: "1rem",
        marginRight: "2rem",
        marginBottom: "3rem",
        paddingRight: "2rem",
      }}
    >
      <h2 style={{ color: "black" }}>Details</h2>
      <p style={{ color: "black", marginBottom: "1rem" }}>
        <strong>Name:</strong> {services.name}
      </p>
      <p style={{ color: "black", marginBottom: "1rem" }}>
        <strong>Customer Description:</strong> {services.description}
      </p>
      <p style={{ color: "black", marginBottom: "1rem" }}>
        <strong>Host Description:</strong> {services.hostDescription}
      </p>
      <p style={{ color: "black", marginBottom: "1rem" }}>
        <strong>Type:</strong> {services.filter}
      </p>
      <p style={{ color: "black", marginBottom: "1rem" }}>
        <strong>Location:</strong> {services.location}
      </p>
      <p style={{ color: "Green", marginBottom: "1rem" }}>
        <strong>Competition:</strong> {services.competition}
      </p>
    </div>
  );
}

export default Details;
