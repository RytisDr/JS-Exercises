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
    clone
      .querySelector("article button")
      .addEventListener("click", function clickToRMV() {
        remove(user.id, clone);
        this.removeEventListener("click", clickToRMV);
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
      removeUserArticle(data);
    });
}
function removeUserArticle(user) {
  document.querySelector(`[data-id="${user.id}"]`).remove();
}
