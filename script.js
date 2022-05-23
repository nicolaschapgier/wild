const message =
  "Merci nous espérons sincèrement retrouver cette sandale (et pourquoi pas Arthur).";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

document.getElementById("btnOc").addEventListener("click", youClicked);

function youClicked() {
  document.getElementById("btnOc").innerHTML =
    "Merci de votre inscription, à bientôt !";
}

//qui est le mieux ?

// document
//   .getElementById("btnOc")
//   .addEventListener("click", function (youClicked) {
//     document.getElementById("btnOc").innerHTML = "A très bientôt !!";
//   });
