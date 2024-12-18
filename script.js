const body = document.body
const buttons = document.querySelectorAll('button')
const result = document.querySelector('.result')
const score = document.querySelector('.score')

let humanScore = 0
let computerScore = 0
let round = 1

score.textContent = `Human Score: 0\nComputer Score: 0`

function disableButtons() {
    buttons.forEach(button => button.setAttribute('disabled', ''))
}

function setScore() {
    score.textContent = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`
}

function checkWinner() {
    if (humanScore === 5) {
        result.textContent = 'You win the game!'
        disableButtons()
    }
    else if (computerScore === 5) {
        result.textContent = 'You lose the game!'
        disableButtons()
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

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
        return humanChoice
    }
    else {
        return getHumanChoice()
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        result.textContent = 'It\'s a draw!'
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = 'You win! Paper beats Rock.'
        humanScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = 'You lose! Rock beats Scissors.'
        computerScore++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = 'You lose! Paper beats Rock.'
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        result.textContent = 'It\'s a draw!'
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = 'You win! Scissors beats Paper.'
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = 'You win! Rock beats Scissors.'
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = 'You lose! Scissors beats Paper.'
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        result.textContent = 'It\'s a draw!'
    }
}

buttons.forEach(button => {
    button.textContent === "Rock" ? button.addEventListener('click', () => {
        playRound('rock', getComputerChoice())
        setScore()
        checkWinner()
    }) 
    : button.textContent === "Paper" ? button.addEventListener('click', () => {
        playRound('paper', getComputerChoice())
        setScore()
        checkWinner()
    }) 
    : button.addEventListener('click', () => {
        playRound('scissors', getComputerChoice())
        setScore()
        checkWinner()
    })
})