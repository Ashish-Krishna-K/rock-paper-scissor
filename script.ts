// Create an array of choices, we will use this array to make 
// random choices with the random number generator function.
const choices = ['rock', 'paper', 'scissors'];

// Create an array for rock, paper and scissor buttons
const buttons = [
    document.querySelector('section.controls button.rock'),
    document.querySelector('section.controls button.paper'),
    document.querySelector('section.controls button.scissor')
];

// Create variables to the two p tags that will display round result and 
// final result respectively
const resultDisplay = document.querySelector('section.result h2');

// Create a variable for the controls and reset sections
const controlsSection = document.querySelector('section.controls');
const resetSection = document.querySelector('section.reset');

// Create a variable for the play again button
const resetBtn = document.querySelector('section.reset button.reset');

// Create variables to update Computer and player scores
const playerScore = document.querySelector('span.player-score');
const computerScore = document.querySelector('span.comp-score');

// Create the scoreBoard object to return
const scoreBoard = {
    rounds: 0,
    player: 0,
    computer: 0
}

// Create a function that will randomly pick a number between 0, 1 & 2.
// the math.random function returns a random number between 0-1 by multiplying 
// it with the number we want to be the maximum we can generate a random number
// in this case it will be 0/1/2.
const getRandomNumber = () => Math.floor(Math.random() * 3);

// Create a function to make use of the random number generator function for making
// computer's choice
const getComputerChoice = () => choices[getRandomNumber()];

// Create a function to play one round of the game 
const playRound = (playerChoice: string, computerChoice: string) => {
    // create a switch statement for each of the player choices and inside each case
    // create another switch statement for each of the computer choices
    switch (playerChoice) {
        case (choices[0]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        winner: 'tie',
                        computerChoice
                    };
                case (choices[1]):
                    return {
                        winner: 'computer',
                        computerChoice
                    };
                case (choices[2]):
                    return {
                        winner: 'player',
                        computerChoice
                    };
            }
        case (choices[1]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        winner: 'player',
                        computerChoice
                    };
                case (choices[1]):
                    return {
                        winner: 'tie',
                        computerChoice
                    };
                case (choices[2]):
                    return {
                        winner: 'computer',
                        computerChoice
                    };
            }
        case (choices[2]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        winner: 'computer',
                        computerChoice
                    };
                case (choices[1]):
                    return {
                        winner: 'player',
                        computerChoice
                    };
                case (choices[2]):
                    return {
                        winner: 'tie',
                        computerChoice
                    };
            }
    }
}

const playGame = (event: Event) => {
    // Store the computer choice in a variable
    const computerSelection = getComputerChoice();

    // Get the playerSelection from the pressed button's value
    const targetElem = event.target as HTMLInputElement;
    const playerSelection = (targetElem?.parentElement as HTMLInputElement).value;

    // pass playerSelection and computerSelection to the playround function to get the round winner
    const roundWinner = playRound(playerSelection, computerSelection);

    // we add 1 to the rounds of scoreboard to keep track of the number of rounds played
    scoreBoard.rounds += 1;
    switch (roundWinner?.winner) {
        case ('player'):
            scoreBoard.player += 1;
            if (resultDisplay !== null) resultDisplay.textContent = `You Win! Computer chose ${roundWinner.computerChoice}`
            break;
        case ('computer'):
            scoreBoard.computer += 1;
            if (resultDisplay !== null) resultDisplay.textContent = `You lose! Computer chose ${roundWinner.computerChoice}`
            break;
        case ('tie'):
            if (resultDisplay !== null) resultDisplay.textContent = `It's a tie! Computer chose ${roundWinner.computerChoice}`
    }

    updateScores();
    checkWinner();
}

// Create a function that updates the round winner in the UI
const updateScores = () => {
    if (playerScore !== null) playerScore.textContent = scoreBoard.player.toString();
    if (computerScore !== null) computerScore.textContent = scoreBoard.computer.toString();
}

// Create a function which will check the number of rounds played to determine if game is over 
// and then declare the winner.
const checkWinner = () => {
    // if the number of rounds played is less than 5 we will continue playing the game
    if (scoreBoard.rounds < 5) {
        return;
    }

    resetSection?.classList.toggle('hidden');
    controlsSection?.classList.toggle('hidden');

    // rounds played is 5 or more so we will remove the event listener to prevent addional plays
    buttons.forEach(btn => btn?.removeEventListener('click', playGame));
    if (scoreBoard.player > scoreBoard.computer) {
        if (resultDisplay !== null) resultDisplay.textContent = `You win the game!`
        return;
    }
    if (scoreBoard.computer > scoreBoard.player) {
        if (resultDisplay !== null) resultDisplay.textContent = `You Lose the game!`
        return;
    }
    if (scoreBoard.player === scoreBoard.computer) {
        if (resultDisplay !== null) resultDisplay.textContent = `It's a tie!`;
        return;
    }
}

updateScores();
buttons.forEach(btn => btn?.addEventListener('click', playGame));
resetBtn?.addEventListener('click', () => window.location.reload());
