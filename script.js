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
    let humanChoice = prompt(`Enter "rock", "paper", or "scissors":`);

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    else {
        return getHumanChoice();
    }
}