function changeHeaderType() {
  const headerElement = document.querySelector(".header");
  if (window.scrollY > 0) {
    headerElement.classList.add("header--sticky-on");
  } else headerElement.classList.remove("header--sticky-on");
}
window.addEventListener("scroll", changeHeaderType);
