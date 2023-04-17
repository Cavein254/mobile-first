function fillOut() {
  var fill = document.getElementById("bars");
  if (fill.className === "burger") {
    fill.className += " filler";
  } else {
    fill.className = "burger";
  }
  console.log("clicked object");
}
