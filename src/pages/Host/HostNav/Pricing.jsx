import { useOutletContext } from "react-router-dom";
function pricing() {
  const [services, setServices] = useOutletContext();
  return (
    <div style={{ color: "black" }}>
      <h6 style={{ color: "black" }}>Pricing</h6>

      <p> {services.priceBreakdown}/Unit</p>
    </div>
  );
}

export default pricing;
