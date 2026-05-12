const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(playerChoice, computerChoice)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`
  } else if (userOption === computerResult){
    return `It's a tie! Both chose ${userOption}`
  } else{
    computerResult++;
    return`Player wins! ${computerResult} beats ${userOption}`
  }
}
  const rock = document.getElementById("rock-btn");
  const paper = document.getElementById("paper-btn");
  const scissors = document.getElementById("scissors-btn");

 
  rock.addEventListener("click", () => hasPlayerWonTheRound("Rock",getRandomComputerResult()));

  paper.addEventListener("click", () => hasPlayerWonTheRound("Paper",getRandomComputerResult()));

  scissors.addEventListener("click", () => hasPlayerWonTheRound("Scissors",getRandomComputerResult()));
