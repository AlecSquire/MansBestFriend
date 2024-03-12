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
      priceBreakdown: [
        "Base price: £" + generatePrice(),
        "Extra playtime: £" + generatePrice(),
        "Gourmet treats: £" + generatePrice(),
        "Photo session: £" + generatePrice(),
        "Transportation: £" + generatePrice(),
      ],
      filter: "Assistance",
      description:
        "Your dog spends the day at your sitter’s home. Drop them off in the morning and pick up a happy pup in the evening.",
      hostId: "123",
      hostDescription:
        "Hello! I'm a passionate pet lover offering doggy day care services. I provide a safe and loving environment for your furry friend to enjoy their day.",
      location: "London, UK",
      competition: "Medium",
    },
    {
      id: 2,
      img: "microchip.jpg",
      name: "Drop-In Visits",
      price: generatePrice(),
      priceBreakdown: [
        "Base price: £" + generatePrice(),
        "Extra playtime: £" + generatePrice(),
        "Gourmet treats: £" + generatePrice(),
        "Photo session: £" + generatePrice(),
        "Transportation: £" + generatePrice(),
      ],
      filter: "Care",
      description:
        "Your sitter drops by your home to play with your pets, offer food, and give toilet breaks or clean the litter tray.",
      hostId: "123",
      hostDescription:
        "Hi there! I'm an experienced pet sitter specializing in drop-in visits. I ensure your pets receive the care and attention they need while you're away.",
      location: "Manchester, UK",
      competition: "Low",
    },
    {
      id: 1,
      img: "Groomers.jpg",
      name: "Grooming",
      price: generatePrice(),
      priceBreakdown: [
        "Base price: £" + generatePrice(),
        "Extra playtime: £" + generatePrice(),
        "Gourmet treats: £" + generatePrice(),
        "Photo session: £" + generatePrice(),
        "Transportation: £" + generatePrice(),
      ],
      filter: "Assistance",
      description:
        "Treat your beloved pet to a grooming session that leaves them feeling refreshed, comfortable, and looking their absolute finest.",
      hostId: "123",
      hostDescription:
        "Welcome! I'm a professional pet groomer dedicated to keeping your furry companions looking their best. With gentle care and expert styling, your pet will leave feeling pampered and stylish.",
      location: "Birmingham, UK",
      competition: "High",
    },
    {
      id: 5,
      img: "Buy.jpg",
      name: "House Sitting",
      price: generatePrice(),
      priceBreakdown: [
        "Base price: £" + generatePrice(),
        "Extra playtime: £" + generatePrice(),
        "Gourmet treats: £" + generatePrice(),
        "Photo session: £" + generatePrice(),
        "Transportation: £" + generatePrice(),
      ],
      filter: "Health",
      description:
        "Your sitter takes care of your pets in your home. Your pets will get all the attention they need without leaving home.",
      hostId: "1011",
      hostDescription:
        "Hey there! I'm a reliable house sitter offering pet and home care services. Your pets will be in safe hands, and your home will be looked after with care.",
      location: "Liverpool, UK",
      competition: "Medium",
    },
    {
      id: 3,
      img: "adoptionRed.jpg",
      name: "Dog Walking",
      price: generatePrice(),
      priceBreakdown: [
        "Base price: £" + generatePrice(),
        "Extra playtime: £" + generatePrice(),
        "Gourmet treats: £" + generatePrice(),
        "Photo session: £" + generatePrice(),
        "Transportation: £" + generatePrice(),
      ],
      filter: "Care",
      description:
        "Your dog gets a walk around your local area. Perfect for busy days and dogs with extra energy to burn.",
      hostId: "123",
      hostDescription:
        "Hi! I'm an enthusiastic dog walker ready to take your furry friend on adventures. With me, your dog will enjoy exercise, exploration, and lots of fun!",
      location: "Glasgow, UK",
      competition: "Low",
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
