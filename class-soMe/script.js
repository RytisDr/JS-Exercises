"use strict";
//endpoints
const usersEndP = "http://5bea7942b854d10013109247.mockapi.io/sm/v1/users/";
const statusesEndP =
  "http://5bea7942b854d10013109247.mockapi.io/sm/v1/statusses/";

let myID = "86279536-58f3-48bf-bb3c-e90b3253da6e";
const template = document.querySelector("template").content;

///post me
/* let payload = { name: "Rytis", ID: "86279536-58f3-48bf-bb3c-e90b3253da6e" };

function post() {
  fetch("http://5bea7942b854d10013109247.mockapi.io/sm/v1/users/", {
    method: "post",
    body: JSON.stringify(payload),
    headers: { Accept: "application/json", "Content-type": "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
} */

//fetch and show one of the endpoints
function fetchAndShow(endPoint) {
  fetch(endPoint)
    .then(e => e.json())
    .then(data => {
      if (endPoint == usersEndP) {
        showUsers(data);
      } else if (endPoint == statusesEndP) {
        showStatuses(data);
      }
    });
}

function showUsers(users) {
  users.forEach(user => {
    let clone = template.cloneNode(true);
    clone.querySelector("article").dataset.id = user.id;
    clone.querySelector("h1").textContent = user.name;
    clone.querySelector("button").addEventListener("click", function() {
      removeUser(user.id);
    });
    fetch(statusesEndP + "?search=" + user.ID)
      .then(e => e.json())
      .then(data => {
        data.forEach(post => {
          if (post.text) {
            clone.querySelector("p").textContent = post.text;
          }
        });
        document.querySelector("body").appendChild(clone);
      });
  });
}

function removeUser(id) {
  fetch(usersEndP + id, {
    method: "delete"
  })
    .then(e => e.json())
    .then(data => {
      removeDOMUser(data);
    });
}
function removeDOMUser(user) {
  document.querySelector(`[data-id="${user.id}"]`).remove();
}

function showStatuses(statuses) {
  statuses.forEach(status => {});
}
fetchAndShow(usersEndP);
fetchAndShow(statusesEndP);
