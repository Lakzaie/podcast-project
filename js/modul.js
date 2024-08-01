const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.querySelector('.search-box');

hamburgerIcon.addEventListener("click", function () {
  hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

searchIcon.addEventListener("click", function () {
  searchBox.classList.toggle("active");
});
