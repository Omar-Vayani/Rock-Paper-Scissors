const pBtns = document.querySelectorAll(".pbtn");
const bBtns = document.querySelectorAll(".bbtn");
const play = document.querySelector("button");

let playerChoice;
let botChoice;

pBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    for (let item of e.target.parentElement.children) {
      item.classList.remove("active");
    }
    e.target.classList.add("active");
    playerChoice = e.target.classList[0];
  });
});
play.addEventListener("click", () => {
  botChoice = Math.floor(Math.random() * 3 + 1);
  playerChoice =
    playerChoice == "rock"
      ? 1
      : playerChoice == "paper"
      ? 2
      : playerChoice == "scissors"
      ? 3
      : null;
  for (let item of bBtns) {
    item.classList.remove("active");
  }
  bBtns[botChoice - 1].classList.add("active");
  document.querySelector(".display").innerHTML =
    botChoice == playerChoice
      ? "draw"
      : botChoice == 1 && playerChoice == 2
      ? "you win"
      : botChoice == 1 && playerChoice == 3
      ? "you lost"
      : botChoice == 2 && playerChoice == 3
      ? "you win"
      : botChoice == 2 && playerChoice == 1
      ? "you lost"
      : botChoice == 3 && playerChoice == 1
      ? "you win"
      : botChoice == 3 && playerChoice == 2
      ? "you lost"
      : "choose one!";
  console.log(botChoice, playerChoice);
  playerChoice =
    playerChoice == 1 ? "rock" : playerChoice == 2 ? "paper" : "scissors";
});
