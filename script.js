/*getComputerChoice with options rock paper or scissors randomly*/

const choices = ["rock", "paper", "scissors"];
function computerRandomSelection() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}
/*get playerSelection */

/*get computerSelection */
/*/const computerChoice = choices[random];*/

/*/console.log(userInput);*/
/*console.log(computerChoice);*/
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
    computerSelection === "scissors"
  ) {
    userScore++;
    return "You Win! Rock beats Scissors";
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
    computerSelection === "scissors"
  ) {
    computerScore++;
    return "You Lose! Scissors beat Paper";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    userScore++;
    return "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
    userScore++;
    return "You Win! Scissors beat Paper";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a tie!!";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "rock"
  ) {
    computerScore++;
    return "You Lose! Rock beats Paper";
  } else return "check your spelling";
}

/*Call playRound function for five rounds and keep score. report winner*/

let userScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let userInput = window.prompt("Rock, Paper or Scissors?");
    let computerChoice = computerRandomSelection();
    console.log(playRound(userInput, computerChoice));
    console.log("Computer", computerScore);
    console.log("Me", userScore);
  }
  if (userScore > computerScore) {
    console.log("You are the Winner!!");
  } else if (userScore < computerScore) {
    console.log("You lost! Try again");
  } else console.log("It's a draw!");
}

game();
