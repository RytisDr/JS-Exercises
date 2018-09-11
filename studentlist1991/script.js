"use strict";
window.addEventListener("DOMContentLoaded", init);

let studentPrototype = {
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
  /*  assignHouse() {
    this.house = getStudentHouse();
  } */
};

let students = [];
let allHouses = [];
function init() {
  fetch("students.json")
    .then(e => {
      return e.json();
    })
    .then(allStudentsInHouses);
}

/* function parseJson(jsonData){
  jsonData.forEach(house => {
    let houseStudents = house;
  });
} */

function allStudentsInHouses(house) {
  allHouses = [Object.keys(house)];

  let gryffindorStudents = Array.from(house.Gryffindor);
  let slytherinStudents = Array.from(house.Slytherin);

  console.log(gryffindorStudents);
  /* let gatherStudents =
    house.Gryffindor +
    "," +
    house.Gryffindor +
    "," +
    house.Ravenclaw +
    "," +
    house.Slytherin; */
  //let studentSplit = gatherStudents.split(",");

  let newObj = Object.create(studentPrototype);
  //newObj.splitName(studentSplit[i]);
  //newObj.assignHouse(house);
  //let studentsHouse = assignHouse(studentSplit[i], house);
  students.push(newObj);

  //console.log(students);
}
/* function studentsInHouse(house) {
  const houseStudents = students.filter(inHouse);
  function inHouse(student) {
    if (student.house === house) {
      return true;
    } else {
      return false;
    }
  }
  return houseStudents;
}
 */
