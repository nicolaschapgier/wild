const message =
  "Merci nous espérons sincèrement retrouver cette sandale (et pourquoi pas Arthur)";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

document.getElementById("btnOc").addEventListener("click", youClicked);

function youClicked() {
  document.getElementById("btnOc").innerHTML = "A très bientôt !!";
}

// document
//   .getElementById("btnOc")
//   .addEventListener("click", function (youClicked) {
//     document.getElementById("btnOc").innerHTML = "A très bientôt !!";
//   });
