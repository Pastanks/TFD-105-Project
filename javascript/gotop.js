// 回到頁首
let gotop = document.getElementById("top");
let gotopop = document.getElementsByClassName("top-btn")[0];
window.addEventListener("scroll", showTopBtn);
function showTopBtn() {
  let topfar = window.pageYOffset;
  if (topfar > 300) {
    gotopop.classList.add("on");
  } else {
    gotopop.classList.remove("on");
  }
}
gotop.addEventListener("click", function () {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0; // for chrom
});
