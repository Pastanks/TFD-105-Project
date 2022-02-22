let catrun = document.getElementById("catrr");
catrun.addEventListener("mouseenter", () => {
console.log("aaa")
setTimeout(function(){;
    catrun.remove();
},5000);
});