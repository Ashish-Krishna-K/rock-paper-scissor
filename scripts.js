const body = document.querySelector('#body');
const results = document.querySelector('#results');
const playerScoreLine = document.querySelector('.player-score');
const computerScoreLine = document.querySelector('.computer-score');
const winnerLine = document.querySelector('#winner');
const reset = document.getElementById('again');

const tie = "It's a tie! Computer chose ";
const win = "You win! Computer chose ";
const lose = "You lose! Computer chose ";
const playerWins = "You win!!! You have saved Humanity!!!";
const computerWins = "You Lose! It's over! It's all over!!!"
const draw = "It's a draw! Humanity lives to fight another day."

let playerScore = 0;
let computerScore = 0;


const buttons = body.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function playGame(){
    const playerSelection = this.innerText.toLowerCase();
    const computerSelection = getComputerChoice();

    let roundResult = playRound(playerSelection, computerSelection);

    results.innerText = roundResult + computerSelection;

    keepScores(roundResult);
    
    declareWinner(playerScore, computerScore);
    

    if (winnerLine.innerText !== "") {
        buttons.forEach(button => button.disabled = true);
    };

}));

reset.addEventListener('click', function(){
    window.location.reload();
});


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result = tie;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        result = lose;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        result = win;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result = win;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        result = lose;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        result = lose;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        result = win;
    }

    return result;
};

function keepScores (roundResult) {
    if (roundResult === win) {
        playerScore = ++playerScore
    } else if (roundResult === lose) {
        computerScore = ++computerScore
    };

    playerScoreLine.innerText = playerScore;
    computerScoreLine.innerText = computerScore;
};

function declareWinner (playerScore, computerScore){

    if (playerScore === 5 && computerScore < 5){
        winnerLine.innerText = playerWins;
    } else if (computerScore === 5 && playerScore < 5) {
        winnerLine.innerText = computerWins;
    } else if (playerScore === 5 && computerScore === 5) {
        winnerLine.innerText = draw;
    };
};

