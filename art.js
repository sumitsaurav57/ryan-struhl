const ul = document.querySelector("ul");
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
  ul.classList.toggle("reveal");
  e.stopPropagation();
});