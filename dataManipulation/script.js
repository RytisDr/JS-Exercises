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
      remove(user.id);
      this.removeEventListener("click", clickToRMV);
    });
  clone.querySelector("#edit").addEventListener("click", function editClick() {
    editPost(user);
  });
  document.querySelector("body").appendChild(clone);
}
//edit a post
function editPost(post) {
  //to edit
  let userName = document.querySelector(`[data-id="${post.id}"] #fullName`);
  let userComment = document.querySelector(`[data-id="${post.id}"] #comment`);
  let editBtn = document.querySelector(`[data-id="${post.id}"] #edit`);
  let editPrompt = document.querySelector(`[data-id="${post.id}"] #editPrompt`);
  userName.contentEditable = "true";
  userComment.contentEditable = "true";
  editPrompt.style.display = "inherit";
  editBtn.textContent = "Post";
  //to put
  editBtn.addEventListener("click", function clickPostEdit() {
    editPrompt.style.display = "none";
    editBtn.textContent = "Edit";
    userName.contentEditable = "false";
    userComment.contentEditable = "false";
    const payload = {
      name: userName.textContent,
      comment: userComment.textContent
    };
    const id = post.id;
    const postData = JSON.stringify(payload);
    fetch(endp + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: postData
    }).then(res => res.json());
  });
}
