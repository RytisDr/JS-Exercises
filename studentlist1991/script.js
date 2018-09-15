"use script";
window.addEventListener("DOMContentLoaded", init);

function init() {
  fetch("students.json")
    .then(e => {
      return e.json();
    })
    .then(oneHouse);
}

const allStudents = [];
let currentStudents = [];
let i;
const Student = {
  firstName: "",
  lastName: "",

  toString() {
    return this.firstName + " " + this.lastName;
  },
  splitName(fullName) {
    let dividedName = fullName.split(" ");
    this.firstName = dividedName[0];
    this.lastName = dividedName[1];
  }
};

function oneHouse(data) {
  let jsonData = data;
  const houseArray = Object.keys(jsonData);
  houseArray.forEach(house => {
    gather(house, jsonData[house]);
    displayList(allStudents);
  });
  console.table(allStudents);
}

function gather(house, name) {
  for (i = 0; i < name.length; i++) {
    newStudent = Object.create(Student);
    newStudent.splitName(name[i]);
    newStudent.house = house;
    newStudent.id = generateUUID();
    allStudents.push(newStudent);
  }
}
function generateUUID() {
  // from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/8809472#8809472
  var d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function deleteStudent(studentId) {
  const index = allStudents.findIndex(findStudent);
  allStudents.splice(index, 1);
  console.log("found index " + index);

  function findStudent(student) {
    if (student.id === studentId) {
      return true;
    } else {
      return false;
    }
  }
}

function sortByFirstName() {
  currentStudents.sort(byFirstName);

  function byFirstName(a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    } else if (a.firstName > b.firstName) {
      return 1;
    } else {
      return 0;
    }
  }
}

function sortByLastName() {
  currentStudents.sort(byLastName);

  function byLastName(a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  }
}

function sortByHouse() {
  currentStudents.sort(byHouseAndFirstName);

  function byHouseAndFirstName(a, b) {
    // first sort by house, but if house is the same, sort by first name
    if (a.house < b.house) {
      return -1;
    } else if (a.house > b.house) {
      return 1;
    } else {
      if (a.firstName < b.firstName) {
        return -1;
      } else {
        return 1;
      }
    }
  }
}

function filterByHouse(house) {
  const filteredStudents = allStudents.filter(byHouse);

  function byHouse(student) {
    if (student.house === house) {
      return true;
    } else {
      return false;
    }
  }

  return filteredStudents;
}

function listOfStudents() {
  let str = "";

  allStudents.forEach(student => (str += student + "\n"));

  return str;
}
