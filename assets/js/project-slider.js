let slide = 0;
const frameElement = document.querySelector(".project-slider__frame");

function changeSlide(width) {
  slide++;
  if (slide > 2) {
    slide = 0;
    clearInterval(changeSlide);
  }
  frameElement.scrollLeft = width * slide;
}
function autoChangeSlide(width) {
  setInterval(changeSlide(width), 4000);
}

function controlChangeSlide(width) {
  const prevBtn = document.querySelector(".controls__prev-btn");
  const nextBtn = document.querySelector(".controls__next-btn");

  prevBtn.addEventListener("click", function () {
    slide--;
    if (slide < 0) {
      slide = 2;
      clearInterval(changeSlide);
    }
    frameElement.scrollLeft = width * slide;
  });
  nextBtn.addEventListener("click", function () {
    slide++;
    if (slide > 2) {
      slide = 0;
      clearInterval(changeSlide);
    }
    frameElement.scrollLeft = width * slide;
  });
}
autoChangeSlide(frameElement.offsetWidth);
controlChangeSlide(frameElement.offsetWidth);
