import { createServer, Model } from "miragejs";

function generatePrice() {
  return (Math.random() * 100).toFixed(2); // Generate a random price
}

function generateServiceData() {
  return [
    {
      id: 4,
      img: "PetPhotography.jpg",
      name: "Doggy Day Care",
      price: generatePrice(),
      filter: "Assistance",
      description:
        "Your dog spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
      hostId: "123",
    },
    {
      id: 2,
      img: "microchip.jpg",
      name: "Drop-In Visits",
      price: generatePrice(),
      filter: "Care",
      description:
        "Your sitter drops by your home to play with your pets, offer food, and give toilet breaks or clean the litter tray.",
      hostId: "123",
    },
    {
      id: 1,
      img: "Groomers.jpg",
      name: "Grooming",
      price: generatePrice(),
      filter: "Assistance",
      description:
        "YTreat your beloved pet to a grooming session that leaves them feeling refreshed, comfortable, and looking their absolute finest.",
      hostId: "123",
    },
    {
      id: 5,
      img: "Buy.jpg",
      name: "House Sitting",
      price: generatePrice(),
      filter: "Health",
      description:
        "Your sitter takes care of your pets in your home. Your pets will get all the attention they need without leaving home.",
    },
    {
      id: 3,
      img: "adoptionRed.jpg",
      name: "Dog Walking",
      price: generatePrice(),
      filter: "Care",
      description:
        "Your dog gets a walk around your local area. Perfect for busy days and dogs with extra energy to burn.",
      hostId: "123",
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
      this.get("/host/offered", (schema, request) => {
        // Hard-code the hostId for now
        return schema.db.services.where({ hostId: "123" });
      });
      this.get("/host/offered/:serviceId", (schema, request) => {
        // Hard-code the hostId for now
        const { serviceId } = request.params;
        return schema.db.services.find(serviceId);
      });
    },
  });
}
