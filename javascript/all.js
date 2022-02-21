// 漢堡展開
let burger = document.getElementsByClassName("burger_btn");
    for (let i = 0; i < burger.length; i++) {
    burger[i].addEventListener("click", function () {
    let header = document.getElementsByClassName("header")[0];
    header.classList.toggle("-on");
});
}