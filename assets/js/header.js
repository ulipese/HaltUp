const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav")

menu.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  console.log("toggle")
});
