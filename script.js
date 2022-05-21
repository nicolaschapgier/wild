const message =
  "Thank you for submitting your request. The crew will respond shortly.";

document.getElementById("test").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
