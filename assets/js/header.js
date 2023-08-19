function changeHeaderType() {
  const headerElement = document.querySelector(".header");
  if (window.scrollY > 0) {
    headerElement.classList.add("header--sticky-on");
  } else headerElement.classList.remove("header--sticky-on");
}
window.addEventListener("scroll", changeHeaderType);

const toogleMenu = document.querySelector(".header__toogle-menu");

function changeIcon() {
  const Icons = document.querySelectorAll(".toogle-menu-icon");
  Icons[0].classList.toggle("hidden");
  Icons[1].classList.toggle("hidden");
}

function showMenu() {
  changeIcon();
  const dropdownMenu = document.querySelector(".header__dropdown-menu");

  dropdownMenu.style.display = "flex";
  dropdownMenu.classList.toggle("active");
}

toogleMenu.addEventListener("click", showMenu);
