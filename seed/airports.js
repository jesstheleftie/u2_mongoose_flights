const db = require("../db");
const { Airport } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const airports = [
    {
      name: "Los Angeles International Airport",
      location: "Los Angeles, CA",
      code: "LAX",
    },
    {
      name: "Vancouver International Airport",
      location: "Vancouver, Canada",
      code: "YVR",
    },
    {
      name: "Hong Kong International Airport",
      location: "Hong Kong",
      code: "HKG",
    },
    {
      name: "Tokyo Narita International Airport",
      location: "Tokyo, Japan",
      code: "NRT",
    },
  ];
  await Airport.insertMany(airports);
  console.log("Created airports!");
};

const run = async () => {
  await main();
  db.close();
};

run();
