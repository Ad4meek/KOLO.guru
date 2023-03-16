const navMenu = document.querySelector(".nav__menu");
const sidePanel = document.querySelector(".side_panel");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("menuActive");
  sidePanel.classList.toggle("menuActive");
});