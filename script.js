"use strict";
// Create an array of choices, we will use this array to make 
// random choices with the random number generator function.
const choices = ['rock', 'paper', 'scissor'];
// Create a function that will randomly pick a number between 0, 1 & 2.
// the math.random function returns a random number between 0-1 by multiplying 
// it with the number we want to be the maximum we can generate a random number
// in this case it will be 0/1/2.
const getRandomNumber = () => Math.floor(Math.random() * 3);
// Create a function to make use of the random number generator function for making
// computer's choice
const getComputerChoice = () => choices[getRandomNumber()];
// Create a function for getting the player input and return it in lowercase form.
const getPlayerChoice = () => {
    var _a;
    const promptMessage = "Please make your selection. Please ensure 'rock', 'paper' and 'scissor' is spelled correctly";
    return (_a = prompt(promptMessage)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
};
// Create a function to play one round of the game 
const playRound = (playerChoice, computerChoice) => {
    // create a switch statement for each of the player choices and inside each case
    // create another switch statement for each of the computer choices
    switch (playerChoice) {
        case (choices[0]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        result: 'tie',
                        computerChoice
                    };
                case (choices[1]):
                    return {
                        result: 'computer',
                        computerChoice
                    };
                case (choices[2]):
                    return {
                        result: 'player',
                        computerChoice
                    };
            }
        case (choices[1]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        result: 'player',
                        computerChoice
                    };
                case (choices[1]):
                    return {
                        result: 'tie',
                        computerChoice
                    };
                case (choices[2]):
                    return {
                        result: 'computer',
                        computerChoice
                    };
            }
        case (choices[2]):
            switch (computerChoice) {
                case (choices[0]):
                    return {
                        result: 'computer',
                        computerChoice
                    };
                case (choices[1]):
                    return {
                        result: 'player',
                        computerChoice
                    };
                case (choices[2]):
                    return {
                        result: 'tie',
                        computerChoice
                    };
            }
    }
};
// Create a game function that loops through the playRound function 5 times
// and returns an object with the scores
const playGame = () => {
    var _a;
    // Create the scoreBoard object to return
    const scoreBoard = {
        player: 0,
        computer: 0
    };
    for (let i = 0; i < 5; i++) {
        // Store the computer choice in a variable
        const computerSelection = getComputerChoice();
        // Store player choice in a variable
        let playerSelection = '';
        while (playerSelection === '') {
            playerSelection = (_a = getPlayerChoice()) !== null && _a !== void 0 ? _a : '';
        }
        ;
        // Determine the winner of the round using the playRound function an(d store
        // it in a variable
        const roundWinner = playRound(playerSelection, computerSelection);
        // using the round winner compute scores and display the round winner to the user!
        switch (roundWinner === null || roundWinner === void 0 ? void 0 : roundWinner.result) {
            case ('player'):
                scoreBoard.player = scoreBoard.player + 1;
                console.log(`You Win! Computer chose ${roundWinner.computerChoice}`);
                break;
            case ('computer'):
                scoreBoard.computer = scoreBoard.computer + 1;
                console.log(`You lose! Computer chose ${roundWinner.computerChoice}`);
                break;
            case ('tie'):
                console.log(`It's a tie! Computer chose ${roundWinner.computerChoice}`);
        }
    }
    return scoreBoard;
};
const finalScores = playGame();
// Display the final winner of the game.
console.log(finalScores.player > finalScores.computer ?
    `Player wins the game with ${finalScores.player} points` :
    finalScores.computer > finalScores.player ?
        `Computer wins the game with ${finalScores.computer} points` :
        `It's a tie with the player scoring ${finalScores.player} and the computer scoring ${finalScores.computer}`);
