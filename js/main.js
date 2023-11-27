const menu = document.querySelector(".mobile-menu");
const mMenuToggle = document.querySelector(".mobile-menu-wrapper");
const mMenuBurger = document.querySelector('.mobile-menu-burger')

mMenuToggle.addEventListener("click", (event) => {
  menu.classList.toggle("active");
  mMenuBurger.classList.toggle("active");
});