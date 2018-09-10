"use strict";

const names = [
  "Harry Potter",
  "Ron Weasley",
  "Hermione Granger",
  "Neville Longbottom",
  "Luna Lovegood",
  "Cho Chang",
  "Justin Finch-Fletchly",
  "Draco Malfoy"
];

const houses = {
  Gryffindor: "Gryffindor",
  Hufflepuff: "Hufflepuff",
  Ravenclaw: "Ravenclaw",
  Slytherin: "Slytherin"
};

const students = [];
window.addEventListener("DOMContentLoaded", createStudents);

function createStudents() {
  ///WITH FOR LOOP
  //loop();
  //WITH FOR EACH LOOP
  names.forEach(pushToArrays);
  console.table(students);
  const gryffindorStudents = students.filter(inGryffindor);
  console.table(students.sort(sortByLastName));

  console.table(gryffindorStudents);
  console.table(studentsInHouse(houses.Slytherin));
}

let nameObject = {
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
//WITH FOR EACH LOOP
function pushToArrays(name) {
  const newObject = Object.create(nameObject);
  newObject.splitName(name);
  const randomHouse = Object.keys(houses)[
    Math.floor(Math.random() * Object.keys(houses).length)
  ];

  newObject.house = randomHouse;
  students.push(newObject);
}
//WITH FOR LOOP
/* function loop() {
  for (let i = 0; i < names.length; i++) {
    const newObject = Object.create(nameObject);
    newObject.splitName(names[i]);
    students.push(newObject);
  }
}
 */
function sortByLastName(a, b) {
  if (a.lastName < b.lastName) {
    return -1;
  } else {
    return 1;
  }
}

function inGryffindor(student) {
  if (student.house == "Gryffindor") {
    return true;
  } else {
    return false;
  }
}
const gryffindorStudents = students.filter(inGryffindor);
console.table(gryffindorStudents);
///FUNCTION TO FILTER BY HOUSE
function studentsInHouse(house) {
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
