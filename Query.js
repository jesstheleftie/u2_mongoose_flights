

const db = require("./db/index");
const { Airport, Flight } = require("./models/index");

//1. list of all flights and airports
const viewAllFlightsAndAirports = async (index) => {
  let foundFlights = await Flight.find();

  let specificFlight = foundFlights[index];
  let departingAirport = {};
  let arrivingAirport = {};

  if (specificFlight) {
    departingAirport = await Airport.findById(specificFlight.departingAirport);
    arrivingAirport = await Airport.findById(specificFlight.arrivalAirport);
  }

  const date = new Date(specificFlight.departureDateAndTime);

  const readableDate = date.toLocaleString();
  console.log({
    airline: specificFlight.airline,
    airport: departingAirport.name,
    arrivalAirport: arrivingAirport.name,
    flightNum: specificFlight.flightNumber,
    departureDateAndTime: readableDate,
    _id: specificFlight._id,
  });
};

//2. access details via object

const findDetailById = async (id) => {
  let returnObject = {};
  let foundAirport = await Airport.findById(id);
  if (foundAirport) {
    returnObject = foundAirport;
  } else {
    let foundFlight = await Flight.findById(id);
    if (foundFlight) {
      returnObject = foundFlight;
    }
  }
  console.log("findById", returnObject);
};

//3.Create Flights by entering info
const createAirport = async (obj) => {
  let createdObject = await Airport.create(obj);
  console.log(createdObject);
};

const createFlight = async (obj) => {
  let createdObject = await Flight.create(obj);
  console.log(createdObject);
};

//4. Update details
const updateAirport = async (_id, obj) => {
  let updatedObject = await Airport.updateOne({ _id: _id }, obj);
  console.log("updatedObject", updatedObject);
};

const updateFlight = async (_id, obj) => {
  let updatedObject = await Flight.updateOne({ _id: _id }, obj);
  console.log("updatedObject", updatedObject);
};

//5. delete info
const deleteObject = async (_id) => {
  let deletedObject = {};
  let deletedAirport = await Airport.deleteOne({ _id: _id });
  let deletedFlight = {};
  if (!deletedAirport) {
    deletedFlight = await Flight.deleteOne({ _id: _id });
    if (deletedFlight) {
      deletedObject = deletedFlight;
    }
  } else {
    deletedObject = deletedAirport;
  }
  console.log("deleted", deletedObject);
};

//RUN FUNCTIONS
viewAllFlightsAndAirports(1);

findDetailById("670719a5e8dcf3113266d555");

createAirport({
  name: "ABCD",
  code: "abcD",
  location: "ABCD",
});

createFlight({
  airline: "abc123",
  flightNumber: 123,
  price: 123,
  numberOfSeats: 123,
  departingAirport: "67071980a1edadc1c68bada2",
  arrivalAirport: "670719a5e8dcf3113266d555",
  departureDateAndTime: new Date(),
});

updateFlight("67071a147ba677e55b63d0dc", {
  flightNumber: 456,
});
updateAirport("67071980a1edadc1c68bada2", {
  name: "456",
});

deleteObject("670719a5e8dcf3113266d555");
