// 輪播
let index = 0;
let btnN = document.getElementsByClassName("next-btn")[0];
let btnP = document.getElementsByClassName("prev-btn")[0];
let container = document.getElementsByClassName("top-main")[0];
btnN.addEventListener("click", () => {
  container.classList.remove("-index-" + index);
  if (index >= 2) {
    index = 0;
  } else {
    index++;
  }
  container.classList.add("-index-" + index);
});
btnP.addEventListener("click", () => {
  container.classList.remove("-index-" + index);
  if (index <= 0) {
    index = 2;
  } else {
    index--;
  }
  container.classList.add("-index-" + index);
});
function slide() {
  container.classList.remove("-index-" + index);
  if (index >= 2) {
    index = 0;
  } else {
    index++;
  }
  container.classList.add("-index-" + index);
}

let timer = setInterval(slide, 7000);

container.addEventListener("mouseenter", () => {
  window.clearInterval(timer);
});
container.addEventListener("mouseleave", () => {
  window.clearInterval(timer);
  timer = setInterval(slide, 7000);
});

