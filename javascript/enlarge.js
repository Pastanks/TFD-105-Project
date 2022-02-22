// 放大
let img = picC.getElementsByTagName("img");
let BigGallery =document.getElementById("picX");

for (i = 0; i < img.length; i++) {
img[i].onclick = function () {
    BigGallery.src = this.src;
    area.style.display = "flex";
    }   
    area.onclick = function () {
    area.style.display = "none";
    } 
}
