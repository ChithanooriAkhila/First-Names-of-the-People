const names = require("../country/state/city/index");
const firstNamesList = require("../utilities/utils/index");
let firstNames;
const getPeopleInCity = (nameList) => {
  firstNames = firstNamesList(names);
  console.log(firstNames);
  return firstNames;
};

getPeopleInCity(names);
module.exports = getPeopleInCity(names);

// const getPeopleInCity = (nameList) => {
//   const firstNames = [];
//   names.forEach((obj) => {
//     let { firstName, lastName } = obj;
//     firstNames.push(firstName);
//   });
//   return firstNames;
// };
