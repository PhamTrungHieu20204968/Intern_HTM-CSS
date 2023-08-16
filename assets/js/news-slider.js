let newsSlide = 0;
const newFrameElement = document.querySelector(".news-body__list");
console.log(newFrameElement);

function changeSlide() {
  newsSlide++;
  if (newsSlide > 3) {
    newsSlide = 0;
    clearInterval(changeSlide);
  }
  newFrameElement.scrollLeft = 382 * newsSlide;
}
function newsAutoChangeSlide() {
  setInterval(changeSlide, 4000);
}

function newControlChangeSlide() {
  const newsPrevBtn = document.querySelector(".news-controls__prev-btn");
  const newsNextBtn = document.querySelector(".news-controls__next-btn");

  newsPrevBtn.addEventListener("click", function () {
    newsSlide--;
    if (newsSlide < 0) {
      newsSlide = 2;
      clearInterval(changeSlide);
    }
    newFrameElement.scrollLeft = 382 * newsSlide;
  });
  newsNextBtn.addEventListener("click", function () {
    newsSlide++;
    if (newsSlide > 3) {
      newsSlide = 0;
      clearInterval(changeSlide);
    }
    newFrameElement.scrollLeft = 382 * newsSlide;
  });
}
newsAutoChangeSlide();
newControlChangeSlide();
