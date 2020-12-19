let button = document.getElementsByTagName("button")[0];
let panel = document.getElementById("panel");

button.addEventListener("click", function () {
  if (panel.style.display === "none") {
    panel.style.display = "block";
  } else {
    panel.style.display = "none";
  }
});
