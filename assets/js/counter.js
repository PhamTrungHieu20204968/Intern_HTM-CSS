function count() {
  const counterElements = document.querySelectorAll(".project-counter__number");

  if (window.scrollY > 1150 && window.scrollY < 1900) {
    counterElements[0].classList.add("count-to-200");
  }

  if (window.scrollY > 1400 && window.scrollY < 2100) {
    counterElements[1].classList.add("count-to-300");
  }

  if (window.scrollY < 1200 || window.scrollY > 1900) {
    counterElements[0].classList.remove("count-to-200");
  }

  if (window.scrollY < 1400 || window.scrollY > 2100) {
    counterElements[1].classList.remove("count-to-300");
  }
}
window.addEventListener("scroll", count);
