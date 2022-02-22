// 上下圖連動  
let img = picb.getElementsByTagName("img");
let BigGallery =document.getElementById("picX");

for (i = 0; i < img.length; i++) {
img[i].onclick = function () {
    BigGallery.src = this.src;
    return false;
    }
}
