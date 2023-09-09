function toggleText() {
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const toggleButton = document.getElementById("toggleButton");

  if (text1.style.display !== "none") {
    text1.style.display = "none";
    text2.style.visibility = "visible";
    text1.style.visibility = "collapse";
    text2.style.display = "block";
  } else {
    text1.style.display = "block";
    text1.style.visibility = "visible";
    text2.style.visibility = "collapse";
    text2.style.display = "none";
  }
}
