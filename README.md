# rock-paper-scissor
This is an in-browser version of Rock paper scissor game built using JavaScript as part of the Odin Project foundations project.

The scope of this project is limited only playing rock-paper-scissor in the DevTools console. As such the body of the webpage will remain blank.
This will be updated to have an actual User Interface in the future when we revisit the project further down the module.

This project was already built in my first run through The Odin Project, however I am revisiting every project with more advanced knowledge of HTML,CSS,JS concepts. This time around I chose to use typescript instead of regular JavaScript to practice using TypeScript more. I decided to only satisfy the project requirements in the second revisit even if I am capable of more.

We start of the script file by first declaring an array of choices available in the rock-paper-scissors game. 

Next we declare the getRandomNumber function that can generate a random number between 0-2. This number will correspond to the array index where our choices are stored.

Next we declare the getComputerChoice function that will utilize the getRandomNumber function to generate a random choice and return the string value of that choice using the random number generated as an array index on the choices array

Next we declare getPlayerChoice function which will prompt the user for a choice and returns the user's choice by first converting it to lowercase

Next we declare a playRound function that accepts two arguments the playerChoice and the computerChoice, the function uses multiple nested switch statements to determine the winner of the round(admittedly this is very ugly and very difficult to read. If you can suggest me a better, more elegant way to acheive the same thing please do reach out to me.)
After determining the winner the function will return an object that contains the winner property indicating the winner of the round and also the choice made by the computer. Such a return object is needed as I opted to display both the round result and the computer's choice to the user.

Next we declare the playGame function where we first declare the scoreBoard object that keeps a tally of the score for each round, then we utilize a for loop to play each round 5 times.
In each round we get the computerChoice and store it in a variable, then we prompt the user to make a selection(here we used a while loop to ensure the player inputs a choice and not leave the box empty)
Once we have both the playerSelection and the computerSelection we pass the two variables to the playRound function and determine the winner. From the roundWinner object we utilize the switch statement to compute the score and display the round result to the user.

Finally we compute the match winner using a simple if statement(here i used ternary operator for breivity).

Below is the old code snippet as a record since it was modified to include UI.

````
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
    const promptMessage = "Please make your selection. Please ensure 'rock', 'paper' and 'scissor' is spelled correctly"
    return prompt(promptMessage)?.toLowerCase();
}

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

// Create a game function that loops through the playRound function 5 times
// and returns an object with the scores
const playGame = () => {
    // Create the scoreBoard object to return
    const scoreBoard = {
        player: 0,
        computer: 0
    }

    for (let i = 0; i < 5; i++) {
        // Store the computer choice in a variable
        const computerSelection = getComputerChoice();

        // Store player choice in a variable
        let playerSelection = '';
        while (playerSelection === '') {
            playerSelection = getPlayerChoice() ?? '';
        };

        // Determine the winner of the round using the playRound function an(d store
        // it in a variable
        const roundWinner = playRound(playerSelection, computerSelection);

        // using the round winner compute scores and display the round winner to the user!
        switch (roundWinner?.winner) {
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
}

const finalScores = playGame();

// Display the final winner of the game.
console.log(
    finalScores.player > finalScores.computer ?
        `Player wins the game with ${finalScores.player} points` :
        finalScores.computer > finalScores.player ?
            `Computer wins the game with ${finalScores.computer} points` :
            `It's a tie with the player scoring ${finalScores.player} and the computer scoring ${finalScores.computer}`
) 
````