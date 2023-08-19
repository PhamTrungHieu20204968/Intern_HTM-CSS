let newsSlide = 0;
const newFrameElement = document.querySelector(".news-body__list");

function changeSlide(width) {
  newsSlide++;
  if ((width + 24) * newsSlide >= newFrameElement.scrollWidth) {
    newsSlide = 0;
    clearInterval(changeSlide);
  }
  newFrameElement.scrollLeft = (width + 24) * newsSlide;
}
function newsAutoChangeSlide(width) {
  setInterval(changeSlide(width), 4000);
}

function newControlChangeSlide(width) {
  const newsPrevBtn = document.querySelector(".news-controls__prev-btn");
  const newsNextBtn = document.querySelector(".news-controls__next-btn");

  newsPrevBtn.addEventListener("click", function () {
    newsSlide--;
    if (newsSlide < 0) {
      newsSlide = newFrameElement.scrollWidth / (width + 24);
      clearInterval(changeSlide);
    }
    newFrameElement.scrollLeft = (width + 24) * newsSlide;
  });
  newsNextBtn.addEventListener("click", function () {
    newsSlide++;
    if ((width + 24) * newsSlide >= newFrameElement.scrollWidth) {
      newsSlide = 0;
      clearInterval(changeSlide);
    }
    newFrameElement.scrollLeft = (width + 24) * newsSlide;
  });
}
newsAutoChangeSlide(newFrameElement.offsetWidth);
newControlChangeSlide(newFrameElement.offsetWidth);
