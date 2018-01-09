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
let messageDisplay = document.querySelector("#message")

colorDisplay.textContent = answerColor;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    let guessedColor = this.style.backgroundColor;
    if (guessedColor === answerColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(guessedColor)
      alert("You got it!")
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again."
    }
  });
}

function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
