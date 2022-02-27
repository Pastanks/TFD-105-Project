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
setInterval(function () {
  container.classList.remove("-index-" + index);
  if (index >= 2) {
    index = 0;
  } else {
    index++;
  }
  container.classList.add("-index-" + index);
}, 10000);