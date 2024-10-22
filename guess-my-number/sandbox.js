"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent =
//   "🎉 Ramzy is Correct! yeah!!!🎊🎉";

// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 25;
// document.querySelector(".guess").value = 24;

// console.log((document.querySelector(".guess").value = 24));

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number Entered";

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "🎉 That is AMAZING! Yeah!!!🎊🎉";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "The Number is TOO High 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭You lost the game";
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#c1121f";
    }

    // WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        " The Number is too low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭You lost the game";
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "#780000";
    }
  }
});

// THE RESET BUTTON, WHICH IS AGAIN

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
