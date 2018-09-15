"use strict";

window.addEventListener("DOMContentLoaded", initFrontend);

function initFrontend() {
  document
    .querySelector("#sorting button:first-child")
    .addEventListener("click", firstButtonClicked);
  document
    .querySelector("#sorting button:nth-child(2)")
    .addEventListener("click", secondButtonClicked);
  document
    .querySelector("#sorting button:nth-child(3)")
    .addEventListener("click", thirdButtonClicked);
}

document
  .querySelector("table#student-list")
  .addEventListener("click", tableClicked);

function tableClicked(event) {
  const clicked = event.target;
  if (clicked.tagName.toLowerCase() === "button") {
    deleteClicked(clicked);
  }
}

function deleteClicked(deleButton) {
  let tr = deleButton.parentElement;
  while (tr.tagName != "TR") {
    tr = tr.parentElement;

    const studentId = tr.dataset.studentId;
    console.log(studentId);

    deleteStudent(studentId);
  }
  tr.remove();
}

function firstButtonClicked() {
  sortByFirstName();
  displayList(currentStudents);
}

function secondButtonClicked() {
  sortByLastName();
  displayList(currentStudents);
}
function thirdButtonClicked() {
  sortByHouse();
  displayList(currentStudents);
}

document
  .querySelectorAll("#filters a")
  .forEach(elem => elem.addEventListener("click", filterClicked));

function filterClicked(event) {
  const filter = this.dataset.filter;
  event.preventDefault();
  if (filter === "all") {
    currentStudents = allStudents;
    displayList(currentStudents);
  } else {
    currentStudents = filterByHouse(filter);
    displayList(currentStudents);
  }
}

function displayList(listOfStudents) {
  document.querySelector("table#student-list tbody").innerHTML = "";
  listOfStudents.forEach(student => {
    const clone = document.querySelector("#template").content.cloneNode(true);
    clone.querySelector("[data-firstname]").textContent = student.firstName;
    clone.querySelector("[data-lastname]").textContent = student.lastName;
    clone.querySelector("[data-house]").textContent = student.house;
    clone.querySelector("tr").dataset.studentId = student.id;
    document.querySelector("table#student-list tbody").appendChild(clone);
  });
}
