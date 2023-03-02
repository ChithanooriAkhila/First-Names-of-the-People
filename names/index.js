const names = require("../country/state/city/index");
const firstNamesList = require("../utilities/utils/index");
let firstNames;
const getPeopleInCity = (names) => {
  firstNames = firstNamesList(names);
  //   console.log(firstNames);
  return firstNames;
};

// getPeopleInCity(names);
module.exports = getPeopleInCity;
