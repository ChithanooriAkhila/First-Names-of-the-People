const names = require("../country/state/city/index");
const getPeopleInCity = (nameList) => {
  const firstNames = [];
  names.forEach((obj) => {
    let { firstName, lastName } = obj;
    firstNames.push(firstName);
  });
  return firstNames;
};
getPeopleInCity(names);
module.exports = getPeopleInCity;
