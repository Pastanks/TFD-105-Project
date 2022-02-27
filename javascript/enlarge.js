// 放大
let img = picC.getElementsByTagName("img");
let BigGallery = document.getElementById("picX");
let picdelect = document.getElementById("picdelect");

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    BigGallery.src = this.src;
    area.style.display = "flex";
  };
  area.onclick = function (e) {
    e.stopPropagation();
    if (e.eventPhase === 2) {
      area.style.display = "none";
    }
    picdelect.addEventListener("click", function () {
      area.style.display = "none";
    });
  };
}
