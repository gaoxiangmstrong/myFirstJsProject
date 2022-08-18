let imgs = document.querySelectorAll("img");

for (let img of imgs) {
  img.addEventListener("click", function () {
    removeSibiliStyles();
    img.classList.add("active");
  });
}

function removeSibiliStyles() {
  for (let img of imgs) {
    img.classList.remove("active");
  }
}
