let numberOfSquares = 6;
let colors = [];
let answerColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("color-display");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let difficultyButtons = document.querySelectorAll(".difficulty");

initialize();

function initialize() {
  setUpDifficulty();
  setUpSquares();
  reset();
}

function setUpDifficulty() {
  for (let i = 0; i < difficultyButtons.length; i++) {
    difficultyButtons[i].addEventListener("click", function() {
      difficultyButtons[0].classList.remove("selected");
      difficultyButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
      reset();
    });
  }
}

// function setUpDifficulty() {
//   for (let i = 0; i < difficultyButtons.length; i++) {
//     difficultyButtons[i].addEventListener("click", function() {
//       difficultyButtons[i].classList.remove("selected");
//       this.classList.add("selected");
//       if (this.textContent === "Easy") {
//         numberOfSquares = 3;
//       } else if (this.textContent === "Medium") {
//         numberOfSquares = 6;
//       } else {
//         numberOfSquares = 9;
//       }
//       reset();
//     });
//   }
// }

function setUpSquares() {
  for (let i = 0; i < squares.length; i++) {
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
}

function reset() {
  colors = generateColors(numberOfSquares);
  answerColor = pickedColor();
  colorDisplay.textContent = answerColor;
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", () => {
  reset();
})


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
