/*getComputerChoice with options rock paper or scissors randomly*/

const choices = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * choices.length);

/*get playerSelection */
let userInput = window.prompt("Rock, Paper or Scissors?");

/*get computerSelection */
const computerChoice = choices[random];

console.log(userInput);
console.log(computerChoice);
/*function to compare choices and return winner*/
function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "paper"
  ) {
    return "You Lose! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
  ) {
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
    return "You Lose! Scissors beat Paper";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "rock"
  ) {
    return "You Win! Paper beats Rock";
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "paper"
  ) {
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
    return "You Lose! Rock beats Paper";
  } else return "check your spelling";
}
console.log(playRound(userInput, computerChoice));

/*Call playRound function for five rounds and keep score. report winner*/
