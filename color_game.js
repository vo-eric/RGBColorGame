colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

let squares = document.querySelectorAll(".square");
let answerColor = colors[3];
let colorDisplay = document.getElementById("color-display");

colorDisplay.textContent = answerColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    let guessedColor = this.style.backgroundColor;
    if (guessedColor === answerColor) {
      alert("You got it!")
    } else {
      console.log("Try again.");
    }
  });
}

