const db = require("../db");
const { Airport, Flight } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const laxAirport = await Airport.findOne({
    name: "Los Angeles International Airport",
  });
  const yvrAirport = await Airport.findOne({
    name: "Vancouver International Airport",
  });
  const hkgAirport = await Airport.findOne({
    name: "Hong Kong International Airport",
  });
  const nrtAirport = await Airport.findOne({
    name: "Tokyo Narita International Airport",
  });

  const flights = [
    {
      airline: "Delta",
      flightNumber: 1234,
      price: 450,
      numberOfSeats: 200,
      departingAirport: laxAirport._id,
      arrivalAirport: yvrAirport._id,
      departureDateAndTime: new Date("2024-10-20T14:30:00"),
    },
    {
      airline: "Air Canada",
      flightNumber: 3456,
      price: 700,
      numberOfSeats: 250,
      departingAirport: yvrAirport._id,
      arrivalAirport: nrtAirport._id,
      departureDateAndTime: new Date("2024-11-05T11:00:00"),
    },
    {
      airline: "Cathay Pacific",
      flightNumber: 7891,
      price: 1200,
      numberOfSeats: 300,
      departingAirport: hkgAirport._id,
      arrivalAirport: nrtAirport._id,
      departureDateAndTime: new Date("2024-12-01T08:45:00"),
    },
    {
      airline: "Japan Airlines",
      flightNumber: 9123,
      price: 1300,
      numberOfSeats: 280,
      departingAirport: nrtAirport._id,
      arrivalAirport: laxAirport._id,
      departureDateAndTime: new Date("2024-11-15T16:20:00"),
    },
    {
      airline: "American Airlines",
      flightNumber: 5678,
      price: 380,
      numberOfSeats: 180,
      departingAirport: laxAirport._id,
      arrivalAirport: hkgAirport._id,
      departureDateAndTime: new Date("2024-10-21T10:00:00"),
    },
    {
      airline: "United",
      flightNumber: 9102,
      price: 300,
      numberOfSeats: 220,
      departingAirport: yvrAirport._id,
      arrivalAirport: hkgAirport._id,
      departureDateAndTime: new Date("2024-10-22T16:45:00"),
    },
    {
      airline: "Southwest",
      flightNumber: 4567,
      price: 250,
      numberOfSeats: 150,
      departingAirport: nrtAirport._id,
      arrivalAirport: laxAirport._id,
      departureDateAndTime: new Date("2024-10-23T08:00:00"),
    },
  ];
  await Flight.insertMany(flights);
  console.log("Created airports!");
};

const run = async () => {
  await main();
  db.close();
};

run();
