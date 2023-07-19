// Create an array of choices, we will use this array to make 
// random choices with the random number generator function.
var choices = ['rock', 'paper', 'scissors'];
// Create an array for rock, paper and scissor buttons
var buttons = [
    document.querySelector('section.controls button.rock'),
    document.querySelector('section.controls button.paper'),
    document.querySelector('section.controls button.scissor')
];
// Create variables to the two p tags that will display round result and 
// final result respectively
var resultDisplay = document.querySelector('section.result h2');
// Create a variable for the controls and reset sections
var controlsSection = document.querySelector('section.controls');
var resetSection = document.querySelector('section.reset');
// Create a variable for the play again button
var resetBtn = document.querySelector('section.reset button.reset');
// Create variables to update Computer and player scores
var playerScore = document.querySelector('span.player-score');
var computerScore = document.querySelector('span.comp-score');
// Create the scoreBoard object to return
var scoreBoard = {
    rounds: 0,
    player: 0,
    computer: 0
};
// Create a function that will randomly pick a number between 0, 1 & 2.
// the math.random function returns a random number between 0-1 by multiplying 
// it with the number we want to be the maximum we can generate a random number
// in this case it will be 0/1/2.
var getRandomNumber = function () { return Math.floor(Math.random() * 3); };
// Create a function to make use of the random number generator function for making
// computer's choice
var getComputerChoice = function () { return choices[getRandomNumber()]; };
// Create a function to play one round of the game 
var playRound = function (playerChoice, computerChoice) {
    // create a switch statement for each of the player choices and inside each case
    // create another switch statement for each of the computer choices
    switch (playerChoice) {
        case (choices[0]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        winner: 'tie',
                        computerChoice: computerChoice
                    };
                case (choices[1]):
                    return {
                        winner: 'computer',
                        computerChoice: computerChoice
                    };
                case (choices[2]):
                    return {
                        winner: 'player',
                        computerChoice: computerChoice
                    };
            }
        case (choices[1]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        winner: 'player',
                        computerChoice: computerChoice
                    };
                case (choices[1]):
                    return {
                        winner: 'tie',
                        computerChoice: computerChoice
                    };
                case (choices[2]):
                    return {
                        winner: 'computer',
                        computerChoice: computerChoice
                    };
            }
        case (choices[2]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        winner: 'computer',
                        computerChoice: computerChoice
                    };
                case (choices[1]):
                    return {
                        winner: 'player',
                        computerChoice: computerChoice
                    };
                case (choices[2]):
                    return {
                        winner: 'tie',
                        computerChoice: computerChoice
                    };
            }
    }
};
var playGame = function (event) {
    // Store the computer choice in a variable
    var computerSelection = getComputerChoice();
    // Get the playerSelection from the pressed button's value
    var targetElem = event.target;
    var playerSelection = (targetElem === null || targetElem === void 0 ? void 0 : targetElem.parentElement).value;
    // pass playerSelection and computerSelection to the playround function to get the round winner
    var roundWinner = playRound(playerSelection, computerSelection);
    // we add 1 to the rounds of scoreboard to keep track of the number of rounds played
    scoreBoard.rounds += 1;
    switch (roundWinner === null || roundWinner === void 0 ? void 0 : roundWinner.winner) {
        case ('player'):
            scoreBoard.player += 1;
            if (resultDisplay !== null)
                resultDisplay.textContent = "You Win! Computer chose ".concat(roundWinner.computerChoice);
            break;
        case ('computer'):
            scoreBoard.computer += 1;
            if (resultDisplay !== null)
                resultDisplay.textContent = "You lose! Computer chose ".concat(roundWinner.computerChoice);
            break;
        case ('tie'):
            if (resultDisplay !== null)
                resultDisplay.textContent = "It's a tie! Computer chose ".concat(roundWinner.computerChoice);
    }
    updateScores();
    checkWinner();
};
// Create a function which will check the number of rounds played to determine if game is over 
// and then declare the winner.
var checkWinner = function () {
    // if the number of rounds played is less than 5 we will continue playing the game
    if (scoreBoard.rounds < 5) {
        return;
    }
    resetSection === null || resetSection === void 0 ? void 0 : resetSection.classList.toggle('hidden');
    controlsSection === null || controlsSection === void 0 ? void 0 : controlsSection.classList.toggle('hidden');
    // rounds played is 5 or more so we will remove the event listener to prevent addional plays
    buttons.forEach(function (btn) { return btn === null || btn === void 0 ? void 0 : btn.removeEventListener('click', playGame); });
    if (scoreBoard.player > scoreBoard.computer) {
        if (resultDisplay !== null)
            resultDisplay.textContent = "You win the game!";
        return;
    }
    if (scoreBoard.computer > scoreBoard.player) {
        if (resultDisplay !== null)
            resultDisplay.textContent = "You Lose the game!";
        return;
    }
    if (scoreBoard.player === scoreBoard.computer) {
        if (resultDisplay !== null)
            resultDisplay.textContent = "It's a tie!";
        return;
    }
};
var updateScores = function () {
    if (playerScore !== null)
        playerScore.textContent = scoreBoard.player.toString();
    if (computerScore !== null)
        computerScore.textContent = scoreBoard.computer.toString();
};
updateScores();
buttons.forEach(function (btn) { return btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', playGame); });
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', function () { return window.location.reload(); });
