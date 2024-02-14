import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import RandomDog from "./components/RandomDog";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="nav-bar-container">
        <Nav className="nav-bar" />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/random-dog" element={<RandomDog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// const MyComponent = () => {
//   return (
//     <p>You have arrived to the home page</p>
//   )
// }
// root.render(
//   <BrowserRouter> //You would usually want it to be the first component you render.
//     <div className="App">
//     <div>
//       <div className="nav-bar-container">
//         <Nav className="nav-bar" />
//       <Routes>
//         //The only things you can put in here are fragments and <Route> components.
//         <Route path="/home" element={<MyComponent/>} />
//       </Routes>
//     </div>
//   </BrowserRouter>
// )
