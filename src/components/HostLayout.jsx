import { Link, NavLink, Outlet } from "react-router-dom";
function HostLayout() {
  return (
    <>
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
          to={"/Host"}
        >
          {" "}
          Dashboard{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#161616" : "black",
            };
          }}
          to={"Income"}
        >
          {" "}
          Income{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#161616" : "black",
            };
          }}
          to={"Offered "}
        >
          {" "}
          Services{" "}
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: isActive ? "underline" : "none",
              color: isActive ? "#161616" : "black",
            };
          }}
          to={"Reviews"}
        >
          {" "}
          Reviews{" "}
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
