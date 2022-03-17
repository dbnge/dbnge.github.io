const searchButton = document.querySelector("nav .nav-list .nav-link-search");
const closeButton = document.querySelector(".search-container .link-close");
const navList = document.querySelector(".nav-list");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
   navList.classList.add("hide");
   searchContainer.classList.remove("hide");
   overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
   navList.classList.remove("hide");
   searchContainer.classList.add("hide");
   overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
   navList.classList.remove("hide");
   searchContainer.classList.add("hide");
   overlay.classList.remove("show");
});