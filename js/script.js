function fillOut() {
  var fill = document.getElementById("bars");
  var cover = document.getElementById("cover");
  console.log(cover);
  if (fill.className === "burger") {
    fill.className += " burger-icon-hide filler";
    cover.style.display = "block";
  } else {
    fill.className = "burger";
  }
}
