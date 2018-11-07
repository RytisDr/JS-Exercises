"use strict";
let endp = "http://5be00dbef2ef840013994a6d.mockapi.io/users/";
function fetchData() {
  fetch(endp)
    .then(e => e.json())
    .then(showData);
}
function showData(users) {
  let template = document.querySelector("body template").content;
  users.forEach(user => {
    let clone = template.cloneNode(true);
    clone.querySelector("#fullName").textContent = user.name;
    clone.querySelector("article").dataset.id = user.id;
    clone.querySelector("article button").addEventListener("click", function() {
      remove(user.id);
    });
    document.querySelector("body").appendChild(clone);
  });
}
fetchData();
function remove(id) {
  fetch(endp + id, {
    method: "delete"
  })
    .then(res => res.json())
    .then(data => {
      console.log("data was deleted", data);
    });
}
