function showTables(buttonNumber) {
  // Hide all tables
  for (let i = 1; i <= 8; i++) {
    document.getElementById(`table${i}`).classList.add("hidden");
  }

  // Show tables based on the button clicked
  if (buttonNumber === 1) {
    document.getElementById("table1").classList.remove("hidden");
    document.getElementById("table2").classList.remove("hidden");
  } else if (buttonNumber === 2) {
    document.getElementById("table3").classList.remove("hidden");
    document.getElementById("table4").classList.remove("hidden");
  } else if (buttonNumber === 3) {
    document.getElementById("table5").classList.remove("hidden");
    document.getElementById("table6").classList.remove("hidden");
  } else if (buttonNumber === 4) {
    document.getElementById("table7").classList.remove("hidden");
    document.getElementById("table8").classList.remove("hidden");
  }
}
