let catrun = document.getElementById("catrr");
catrun.addEventListener("mouseenter", () => {
setTimeout(function(){
    if(window.innerWidth >= 768){
    catrun.remove();}
},9000);
});