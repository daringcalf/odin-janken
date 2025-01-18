function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }

  return "lose";
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter your choice ([R]ock✊, [P]aper✋, or [S]cissors✌️)"
  ).toLocaleLowerCase();
  switch (humanChoice) {
    case "r":
    case "✊":
    case "rock":
      humanChoice = "rock";
      break;
    case "p":
    case "paper":
    case "✋":
      humanChoice = "paper";
      break;
    case "s":
    case "scissors":
    case "scissor":
    case "✌️":
      humanChoice = "scissors";
      break;
    default:
      alert("Invalid choice. Please try again.");
      humanChoice = getHumanChoice();
      break;
  }
  return humanChoice;
}

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = [rockButton, paperButton, scissorsButton];

const playerScore = document.querySelector(".scoreboard .player");
const computerScore = document.querySelector(".scoreboard .computer");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.id;
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    switch (result) {
      case "win":
        playerScore.textContent = Number(playerScore.textContent) + 1;
        break;
      case "lose":
        computerScore.textContent = Number(computerScore.textContent) + 1;
        break;
    }

    if (
      Number(playerScore.textContent) === 5 ||
      Number(computerScore.textContent) === 5
    ) {
      if (Number(playerScore.textContent) === 5) {
        alert("You win!");
      } else {
        alert("You lose!");
      }
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    }
  });
});
