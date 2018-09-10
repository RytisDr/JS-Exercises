"use strict";
window.addEventListener("DOMContentLoaded", init);

let studentTemp = {
  firstName: "",
  lastName: "",
  house: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};

let allStudents = [];
function init() {
  fetch("students.json")
    .then(e => {
      return e.json();
    })
    .then(allStudentsInHouses);
}

function allStudentsInHouses(house) {
  let gatherStudents =
    house.Gryffindor +
    "," +
    house.Hufflepuff +
    "," +
    house.Ravenclaw +
    "," +
    house.Slytherin;

  let studentSplit = gatherStudents.split(",");
  for (let i = 0; i < studentSplit.length; i++) {
    let newObj = Object.create(studentTemp);
    newObj.splitName(studentSplit[i]);

    /*    if (newObj == studentsInHouse(house.Gryffindor)) {
      newObj.house = Gryffindor;
    } */

    /* let TheHouse = assignHouse();
    newObj.house = TheHouse; */
    allStudents.push(newObj);
  }
  console.log(allStudents);
}

function sortByFN() {}
function sortByLN() {}
function filterByHouse() {}
function filterAndSort() {}
function returnAList() {}

function studentsInHouse(house) {
  const houseStudents = allStudents.filter(inHouse);
  function inHouse(student) {
    if (student.house === house) {
      return true;
    } else {
      return false;
    }
  }
  return houseStudents;
}
