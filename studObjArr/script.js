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
  loop();
  console.table(students);
  // ... TODO: build this function ...
}

let nameObject = {
  firstName: "",
  lastName: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(firstSpace + 1);
  }
};

function loop() {
  for (let i = 0; i < names.length; i++) {
    const newObject = Object.create(nameObject);
    newObject.splitName(names[i]);
    students.push(newObject);
  }
}
