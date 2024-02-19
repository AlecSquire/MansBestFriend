export default function ServiceData() {
  const generatePrice = () => {
    const minPrice = 20; // Minimum price
    const maxPrice = 100; // Maximum price
    return `$${
      Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice
    }`;
  };

  return [
    {
      img: "Grooming.jpg",
      name: "Grooming",
      price: generatePrice(),
      filter: "Health & Wellness ",
    },
    {
      img: "Microchipping.jpg",
      name: "Microchipping",
      price: generatePrice(),
      filter: "Health & Wellness ",
    },
    {
      img: "Insurance.jpg",
      name: "Insurance",
      price: generatePrice(),
      filter: "Health & Wellness ",
    },
    {
      img: "PetPhotography.jpg",
      name: "Pet Photography",
      price: generatePrice(),
      filter: "Care & Activities",
    },
    {
      img: "DogWalking.jpg",
      name: "Dog Walking",
      price: generatePrice(),
      filter: "Care & Activities",
    },
    {
      img: "DayCare.jpg",
      name: "Daycare",
      price: generatePrice(),
      filter: "Care & Activities",
    },
    {
      img: "Adoption.jpg",
      name: "Adoption",
      price: generatePrice(),
      filter: "Assistance",
    },
    {
      img: "Buy.jpg",
      name: "Buy",
      price: generatePrice(),
      filter: "Assistance",
    },
    {
      img: "BreedServices.jpg",
      name: "Breed Services",
      price: generatePrice(),
      filter: "Assistance",
    },
    {
      img: "VetServices.jpg",
      name: "Vet Services",
      price: generatePrice(),
      filter: "Assistance",
    },
  ];
}
