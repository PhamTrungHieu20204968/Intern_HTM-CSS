let slide = 0;
const frameElement = document.querySelector(".project-slider__frame");

function changeSlide() {
  slide++;
  if (slide > 2) {
    slide = 0;
    clearInterval(changeSlide);
  }
  frameElement.scrollLeft = 332 * slide;
}
function autoChangeSlide() {
  setInterval(changeSlide, 4000);
}

function controlChangeSlide() {
  const prevBtn = document.querySelector(".controls__prev-btn");
  const nextBtn = document.querySelector(".controls__next-btn");

  prevBtn.addEventListener("click", function () {
    slide--;
    if (slide < 0) {
      slide = 2;
      clearInterval(changeSlide);
    }
    frameElement.scrollLeft = 332 * slide;
  });
  nextBtn.addEventListener("click", function () {
    slide++;
    if (slide > 2) {
      slide = 0;
      clearInterval(changeSlide);
    }
    frameElement.scrollLeft = 332 * slide;
  });
}
autoChangeSlide();
controlChangeSlide();
