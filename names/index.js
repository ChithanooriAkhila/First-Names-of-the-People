const names = require("../country/state/city/index");
const firstNamesList = require("../utilities/utils/index");
let firstNames;
const getPeopleInCity = (nameList) => {
  firstNames = firstNamesList(nameList);
  //   console.log(firstNames);
  return firstNames;
};

// getPeopleInCity(names);
module.exports = getPeopleInCity;

// const getPeopleInCity = (nameList) => {
//   const firstNames = [];
//   names.forEach((obj) => {
//     let { firstName, lastName } = obj;
//     firstNames.push(firstName);
//   });
//   return firstNames;
// };
