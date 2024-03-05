import { createServer, Model } from "miragejs";

function generatePrice() {
  return (Math.random() * 100).toFixed(2); // Generate a random price
}

function generateServiceData() {
  return [
    {
      id: 1,
      img: "Groomers.jpg",
      name: "Boarding",
      price: generatePrice(),
      filter: "Assistance",
      description:
        "Your pets stay overnight in your sitter’s home. They’ll be treated like part of the family in a comfortable environment.",
    },
    {
      id: 2,
      img: "Buy.jpg",
      name: "House Sitting",
      price: generatePrice(),
      filter: "Health",
      description:
        "Your sitter takes care of your pets in your home. Your pets will get all the attention they need without leaving home.",
    },
    {
      id: 3,
      img: "VetServices.jpg",
      name: "Dog Walking",
      price: generatePrice(),
      filter: "Care",
      description:
        "Your dog gets a walk around your local area. Perfect for busy days and dogs with extra energy to burn.",
    },
    {
      id: 4,
      img: "PetPhotography.jpg",
      name: "Doggy Day Care",
      price: generatePrice(),
      filter: "Assistance",
      description:
        "Your dog spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
    },
    {
      id: 5,
      img: "microchip.jpg",
      name: "Drop-In Visits",
      price: generatePrice(),
      filter: "Care",
      description:
        "Your sitter drops by your home to play with your pets, offer food, and give toilet breaks or clean the litter tray.",
    },
    // Add other service objects with unique IDs
  ];
}

export default function setupMirage() {
  createServer({
    models: {
      service: Model,
    },

    seeds(server) {
      server.db.loadData({
        services: generateServiceData(),
      });
    },

    routes() {
      this.namespace = "api";

      // Route handler to handle requests for all services
      this.get("/services", (schema) => {
        return schema.db.services;
      });

      // Route handler to handle requests for individual service IDs
      this.get("/services/:serviceId", (schema, request) => {
        const { serviceId } = request.params;
        return schema.db.services.find(serviceId);
      });
    },
  });
}
