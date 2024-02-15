import React, { useState, useEffect } from "react";
import DogNames from "../dogNames";

export default function RandomDog() {
  const [currentDog, setCurrentDog] = useState(null);
  const [isTrue, setIsTrue] = useState(true);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const url =
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=live_AsLLPfEJk4CL5JjiG7CeVmucZoqZEd2KpxKNOUS0JaJcrXaAWXS9RAXbpjCLH3Hg";

    const ApiCall = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCurrentDog(json[0]); // Set the fetched data to state
      } catch (error) {
        console.log("error", error);
      }
    };

    ApiCall();
  }, [isTrue]);

  const handlePreviousDog = () => {
    if (searchHistory.length > 0) {
      // get the id of the previously selected dog
      const previousDogId = searchHistory[searchHistory.length - 1];
      //Find the dog object in the history based on its ID
      const previousDog = searchHistory.find((dog) => dog.id === previousDogId);

      setCurrentDog(previousDog);
      setSearchHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };

  const handleNewDog = (e) => {
    e.preventDefault();
    setIsTrue((isTrue) => !isTrue);
    console.log(searchHistory);
  };

  // Calculate random index and dog name inside the component
  const dogNamesArray = DogNames();
  const randomIndex = Math.floor(Math.random() * dogNamesArray.length);

  return (
    <>
      {currentDog && (
        <div className="randomDog">
          <img
            className="logo"
            src={currentDog.url}
            alt="Random Dog"
            style={{ width: "100%", height: "100%" }}
          />
          <h1>Dog Name: {dogNamesArray[randomIndex]}</h1>
          <h2>Breed: {currentDog.breeds[0].name}</h2>
          <p>{currentDog.breeds[0].description}</p>
          <p>Bred For: {currentDog.breeds[0].bred_for}</p>
          <p>Temperament: {currentDog.breeds[0].temperament}</p>
          <p>Life Span: {currentDog.breeds[0].life_span}</p>
        </div>
      )}
      <button onClick={handleNewDog}>Click for the next pooch</button>
      <button onClick={handlePreviousDog}>Previous Dog</button>
    </>
  );
}
