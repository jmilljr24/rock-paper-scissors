/*getComputerChoice with options rock paper or scissor randomly*/

const choices = ["rock", "paper", "scissor"];
function computerRandomSelection() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

/*function to compare choices and return winner*/
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissor"
  ) {
    userScore++;
    return "You Win! Rock beats Scissor";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "rock"
  ) {
    return "It's a tie!!";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "paper"
  ) {
    return "It's a tie!!";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "scissor"
  ) {
    computerScore++;
    return "You Lose! Scissor beats Paper";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    userScore++;
    return "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "scissor" &&
    computerSelection === "paper"
  ) {
    userScore++;
    return "You Win! Scissor beats Paper";
  } else if (
    playerSelection.toLowerCase() === "scissor" &&
    computerSelection === "scissor"
  ) {
    return "It's a tie!!";
  } else if (
    playerSelection.toLowerCase() === "scissor" &&
    computerSelection === "rock"
  ) {
    computerScore++;
    return "You Lose! Rock beats Paper";
  } else return "check your spelling";
}

/*Call playRound function for five rounds and keep score. report winner*/

let userScore = 0;
let computerScore = 0;

// function game() {
//   for (let i = 0; i < 5; i++) {
//     let userInput = window.prompt("Rock, Paper or Scissor?");
//     let computerChoice = computerRandomSelection();
//     console.log(playRound(userInput, computerChoice));
//     console.log("Computer", computerScore);
//     console.log("Me", userScore);
//   }
//   if (userScore > computerScore) {
//     console.log("You are the Winner!!");
//   } else if (userScore < computerScore) {
//     console.log("You lost! Try again");
//   } else console.log("It's a draw!");
// }

const container = document.querySelector("#container"); // DOM to display round results after button press
const results = document.createElement("div");
results.classList.add("results");
container.appendChild(results);

const user = document.createElement("div");
user.classList.add("user");
container.appendChild(user);

const comp = document.createElement("div");
comp.classList.add("comp");
container.appendChild(comp);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (userScore >= 5 || computerScore >= 5) {
      return;
    }

    game(button.id);
  });
});

// results.innerHTML = playRound(userInput, computerChoice);

function game(userInput) {
  let playerSelection = userInput;
  let computerChoice = computerRandomSelection();

  let roundResults = playRound(playerSelection, computerChoice);
  results.textContent = roundResults;
  user.textContent = "Player Score: " + userScore;
  comp.textContent = "Computer Score: " + computerScore;

  if (userScore >= 5 && computerScore < 5) {
    results.textContent = "Game Over. You Win!!";
  } else if (computerScore >= 5 && userScore < 5) {
    results.textContent = "Game Over. You Lose!";
  }
  console.log(roundResults);
}
