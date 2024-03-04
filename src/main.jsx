import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import setupMirage from "./components/mirageServer.js";

// Initialize MirageJS server

setupMirage();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
