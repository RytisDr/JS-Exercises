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
  // ... TODO: build this function ...
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
