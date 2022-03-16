const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  if (key.keyCode == "78") {
    document.getElementById("credits").style.visibility = "visible";
  }
}
window.addEventListener("keyup", checkKeyPress2, false);
function checkKeyPress2(key2) {
  if ((key2.keyCode = "78")) {
    document.getElementById("credits").style.visibility = "hidden";
  }
}
