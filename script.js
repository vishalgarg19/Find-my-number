"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "correct number";
document.querySelector(".number").textContent = 14;
document.querySelector(".guess").value = 1;
*/

let secNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".number").value = secNum;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  //when no input
  if (!guessNumber) {
    document.querySelector(".message").textContent = "Enter Input!!";

    //when player win
  } else if (guessNumber == secNum) {
    document.querySelector(".message").textContent = "Correct Number!!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess number more than secret number
  } else if (guessNumber !== secNum) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guessNumber > secNum ? "Too High" : "Too Low";

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game!!";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }

  //   else if (guessNumber > secNum) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too High";

  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the Game!!";
  //       score = 0;
  //       document.querySelector(".score").textContent = score;
  //     }

  //     //when guess number more than secret number
  //   } else {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too Low";

  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You Lost the Game!!";
  //       score = 0;
  //       document.querySelector(".score").textContent = score;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secNum = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = " ";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
