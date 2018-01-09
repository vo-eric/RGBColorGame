colors = generateColors(6);

let squares = document.querySelectorAll(".square");
let answerColor = pickedColor();
let colorDisplay = document.getElementById("color-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");

colorDisplay.textContent = answerColor;

resetButton.addEventListener("click", () => {
  colors = generateColors(6);
  answerColor = pickedColor();
  colorDisplay.textContent = answerColor
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  };
  h1.style.backgroundColor = "#232323";
})


for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    let guessedColor = this.style.backgroundColor;
    if (guessedColor === answerColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(guessedColor);
      h1.style.backgroundColor = guessedColor;
      resetButton.textContent = "Play again?"
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

function pickedColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num) {
  randomColors = [];
  for (var i = 0; i < num; i++) {
    randomColors.push(randomColor());
  }
  return randomColors;
}

function randomColor() {
  let red = Math.floor(Math.random() * 256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random() * 256)
  return `rgb(${red}, ${green}, ${blue})`;
}
