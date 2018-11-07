"use strict";
const endp = "http://5be00dbef2ef840013994a6d.mockapi.io/users/";
const template = document.querySelector("body template").content;
window.addEventListener("DOMContentLoaded", fetchUsers());
//Fetch mock.api users
function fetchUsers() {
  fetch(endp)
    .then(e => e.json())
    .then(showData);
}
//show users
function showData(users) {
  let template = document.querySelector("body template").content;
  users.forEach(user => {
    addUserArticle(user, template);
  });
}
//Remove users
function remove(id) {
  fetch(endp + id, {
    method: "delete"
  })
    .then(res => res.json())
    .then(data => {
      removeUserArticle(data);
    });
}
//remove user DOM articles
function removeUserArticle(user) {
  document.querySelector(`[data-id="${user.id}"]`).remove();
}
//add comment to database
document.querySelector("#post").addEventListener("click", function() {
  let userIdInput = document.querySelector("#userInput");
  let commentInput = document.querySelector("#commentInput");
  if (userIdInput.value && commentInput.value) {
    const input = {
      name: userIdInput.value,
      comment: commentInput.value
    };
    fetch(endp, {
      method: "post",
      body: JSON.stringify(input),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        addUserArticle(data);
      });
  }
});
//add user to the DOM
function addUserArticle(user) {
  let clone = template.cloneNode(true);
  clone.querySelector("#fullName").textContent = user.name;
  clone.querySelector("article").dataset.id = user.id;
  if (user.avatar) {
    clone.querySelector("img").src = user.avatar;
  }
  clone.querySelector("p").textContent = user.comment;
  clone
    .querySelector("article button")
    .addEventListener("click", function clickToRMV() {
      remove(user.id, clone);
      this.removeEventListener("click", clickToRMV);
    });
  document.querySelector("body").appendChild(clone);
}
