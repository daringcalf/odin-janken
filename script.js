console.log("Let's play Rock, Paper, Scissors!");

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rounds = 5;

  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    let resultString = `Round ${i + 1}: `;

    if (result === "win") {
      humanScore++;
      resultString += `You win! ${humanSelection.capitalize()} beats ${computerSelection.capitalize()}.`;
    } else if (result === "lose") {
      computerScore++;
      resultString += `You lose! ${computerSelection.capitalize()} beats ${humanSelection.capitalize()}.`;
    } else {
      resultString += "It's a draw!";
    }

    console.log(
      "%c" + resultString,
      `color: ${
        result === "draw" ? "gray" : result === "win" ? "green" : "red"
      }`
    );
  }

  let finalResult = `Final Score: You ${humanScore}, Computer ${computerScore}`;

  console.log(finalResult);

  if (humanScore > computerScore) {
    console.log("%cYou win!", "color: green");
  } else if (humanScore < computerScore) {
    console.log("%cYou lose!", "color: red");
  } else {
    console.log("%cIt's a draw!", "color: gray");
  }
}

playGame();
