export const celestialBodies = {
  sun: {
    name: "Sun",
    radius: 50,
    distance: 0,
    rotationSpeed: 0.004,
    orbitalPeriod: 0,
    texture: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024",
    color: "#FDB813"
  },
  mercury: {
    name: "Mercury",
    radius: 3.8,
    distance: 120,
    rotationSpeed: 0.01,
    orbitalPeriod: 88,
    texture: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024"
  },
  venus: {
    name: "Venus",
    radius: 9.5,
    distance: 180,
    rotationSpeed: 0.008,
    orbitalPeriod: 225,
    texture: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024"
  },
  earth: {
    name: "Earth",
    radius: 10,
    distance: 250,
    rotationSpeed: 0.01,
    orbitalPeriod: 365,
    texture: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024",
    moons: [
      {
        name: "Moon",
        radius: 2.7,
        distance: 25,
        orbitalPeriod: 27.3,
        texture: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024"
      }
    ]
  },
  // Add other planets with similar structure...
};