let menuButton = document.getElementById("burger-icon");
const headerMobile = document.getElementById("links-mobile");
menuButton.addEventListener("click", function () {
  headerMobile.classList.toggle("hidden");
});
