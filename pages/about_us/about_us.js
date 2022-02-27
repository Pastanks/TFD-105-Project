let catrun = document.getElementById("catrr");
catrun.addEventListener("dblclick", () => {
  catrun.classList.toggle("run");
  document.getElementById("catrr").id = "catrrr";
  let catrunr = document.getElementById("catrrr");
  catrunr.addEventListener("mousemove", () => {
    setTimeout(function () {
      if (window.innerWidth >= 768) {
        catrunr.remove();
      }
    }, 6000);
  });
});
