document.getElementById("btn").addEventListener("click", function () {
  // if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  alert("clicked btn");
  document.getElementById("btn").classList.toggle("fas fa-times");
});
