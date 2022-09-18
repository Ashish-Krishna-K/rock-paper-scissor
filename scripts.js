const choices = ['rock', 'paper', 'scissor']

// function to make the computer randomly pick rock paper or scissor.
function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice
}

// just declaring some global variables to help in displaying results.
const tie = "It's a tie! Computer chose "
const win = "You win! Computer chose "
const lose = "You lose! Computer chose "

// calls the game function.
game();

// actually declared the game function.
function game() {
    // declaring some variables to keep track of the score.
    let playerScore = 0;
    let computerScore = 0;
    // utilizing for loop to make the game play 5 rounds.
    for (let i = 0; i < 5; i++){

        if (i <= 5) {

            const playerInput = prompt('make your choice');
            const playerSelection = playerInput.toLowerCase();   
            
            const computerSelection = getComputerChoice();
            // the playRound function is declared further below, assigning the return value of the function to the result variable.
            let result = playRound (playerSelection, computerSelection);
            
            if (result === win) {
                playerScore++;
            } else if (result === lose) {
                computerScore++;
            }
            // below will display the result of each round the score tab so far.
            console.log (result + computerSelection);
            console.log (playerScore);
            console.log (computerScore);
        }
    }
    // gives a declaration of the result.
    if (playerScore > computerScore) {
        console.log('CONGRATULATIONS!!! YOU WON');
    } else if (playerScore === computerScore) {
        console.log("It's a Draw!");
    } else {
        console.log('Too bad! You lost!!!')
    }
}
// the function that was called by the game function
function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return tie; 
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return lose;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return win;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return win;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return lose;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return lose;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return win;
    }
}

