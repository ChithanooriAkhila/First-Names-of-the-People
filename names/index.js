const names = require("../country/state/city/index");
const firstNamesList = require("../utilities/utils/index");
const getPeopleInCity = (nameList) => {
  const firstNames = firstNamesList(names);
  console.log(firstNames);
  return firstNames;
};

getPeopleInCity(names);
module.exports = getPeopleInCity;

// const getPeopleInCity = (nameList) => {
//   const firstNames = [];
//   names.forEach((obj) => {
//     let { firstName, lastName } = obj;
//     firstNames.push(firstName);
//   });
//   return firstNames;
// };
