"use strict";
/* const student1 = {
  firstName: "Harry",
  lastName: "Potter",
  toString() {
    return this.firstName + " " + this.lastName;
  }
};
const student2 = {
  firstName: "Ron",
  lastName: "Weasley"
};
function sortIntoHouse(student, house) {
  student.house = house;
}
sortIntoHouse(student1, "Gryffindor");
sortIntoHouse(student2, "Gryffindor");
Object.setPrototypeOf(student2, student1);
student1.sayHi = function() {
  return "Hi, " + this.firstName;
};
console.log(student1.sayHi());
console.log(student2.sayHi());
console.log("Student is: " + student1);
console.log(`Student is: ${student2}`); */
/* function ourToString() {
  return this.firstName + " " + this.lastName;
} */

const Student = {
  firstName: "",
  lastName: "",
  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    const firstSpace = fullName.indexOf(" ");
    this.firstName = fullName.substring(0, firstSpace);
    this.lastName = fullName.substring(0, firstSpace + 1);
  }
};
const student1 = Object.create(Student);
student1.splitName("Harry Potter");
console.log(student1);
