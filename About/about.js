document.addEventListener("DOMContentLoaded", () => {
  // Load navbar then attach events
  $("#Navbar").load("../header/header.html", function () {});
  $("#footer").load("../footer/footer.html");
});
