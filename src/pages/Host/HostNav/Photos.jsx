import { useOutletContext } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";

function Photos() {
  const [services, setServices] = useOutletContext();
  return (
    <>
      <h6 style={{ color: "black" }}>Photos</h6>
      <div
        style={{
          display: "flex",
          justifyContent: "flexStart",
          alignItems: "center",
        }}
      >
        <img
          src={`/src/assets/${services.img}`}
          style={{
            width: "20%",

            margin: "0rem 0rem 2rem 2rem",
            borderRadius: "0.3rem",
          }}
          alt={services.name}
        />
        <BiImageAdd
          style={{
            height: "6.5rem",
            width: "8rem",
            display: "flex",
            justifyContent: "flexStart",
            margin: "0rem 2rem 2rem 2rem",
            borderRadius: "0.3rem",
            width: "2rem",
            background: "grey",
          }}
        />
      </div>
    </>
  );
}

export default Photos;
