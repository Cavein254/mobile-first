function fillOut() {
  var fill = document.getElementById("bars");
  var cover = document.getElementById("cover");
  if (fill.className === "burger") {
    fill.className += " burger-icon-hide filler";
    cover.style.display = "block";
  } else {
    fill.className = "burger";
  }
}

