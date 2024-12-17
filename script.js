function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // Added semicolon

    switch(randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt(`Enter "rock", "paper", or "scissors":`);
    let computerChoice = getComputerChoice()

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "rock") {
                    alert("Draw!");
                } else if (computerChoice === "paper") {
                    alert("You lose!");
                } else {
                    alert("You win!");
                }
                break
            case "paper":
                if (computerChoice === "rock") {
                    alert("You win!");
                } else if (computerChoice === "paper") {
                    alert("Draw!");
                } else {
                    alert("You lose!");
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    alert("You lose!");
                } else if (computerChoice === "paper") {
                    alert("You win!");
                } else {
                    alert("Draw!");
                }
                break;
        }
    }
    else {
        getHumanChoice()
    }
}
