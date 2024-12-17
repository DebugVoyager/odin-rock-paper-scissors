function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch(randomNumber) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt(`Enter "rock", "paper", or "scissors":`).toLowerCase()

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    else {
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let round = 1

    function displayScore() {
        console.log(`Human's score: ${humanScore}\nComputer's score: ${computerScore}`);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log(`Round ${round}: It's a draw!`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`Round ${round}: You win! Paper beats Rock.`);
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`Round ${round}: You lose! Rock beats Scissors.`);
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log(`Round ${round}: You lose! Paper beats Rock.`);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log(`Round ${round}: It's a draw!`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`Round ${round}: You win! Scissors beats Paper.`);
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`Round ${round}: You win! Rock beats Scissors.`);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`Round ${round}: You lose! Scissors beats Paper.`);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log(`Round ${round}: It's a draw!`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        round++;
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
        displayScore();
    }
    else if (humanScore < computerScore) {
        console.log("You lose the game!");
        displayScore();
    }
    else {
        console.log("it's a draw!");
        displayScore();
    }
}

playGame();