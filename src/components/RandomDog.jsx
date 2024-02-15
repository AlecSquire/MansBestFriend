import React, { useState, useEffect } from "react";

export default function RandomDog() {
  const [currentDog, setCurrentDog] = useState(null);
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    const url =
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=live_AsLLPfEJk4CL5JjiG7CeVmucZoqZEd2KpxKNOUS0JaJcrXaAWXS9RAXbpjCLH3Hg";

    const ApiCall = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setCurrentDog(json[0]); // Set the fetched data to state
      } catch (error) {
        console.log("error", error);
      }
    };

    ApiCall();
  }, [isTrue]);

  const handleNewDog = (e) => {
    e.preventDefault();
    setIsTrue((isTrue) => !isTrue);
  };
  return (
    <>
      {currentDog && (
        <div>
          <img
            className="logo"
            src={currentDog.url}
            alt="Random Dog"
            style={{ width: "100%", height: "100%" }}
          />
          <h2>{currentDog.breeds[0].name}</h2>
          <p>{currentDog.breeds[0].description}</p>
          <p>Bred For: {currentDog.breeds[0].bred_for}</p>
          <p>Temperament: {currentDog.breeds[0].temperament}</p>
          <p>Life Span: {currentDog.breeds[0].life_span}</p>
        </div>
      )}
      <button onClick={handleNewDog}> click for the next pooch </button>
    </>
  );
}
