/* PLANNING FOR GAME (PROBABLY IGNORE THIS AND COLLAPSE IT.)
getComputerChoice : randomly returns Rock, Paper, or Scissors.
getPlayerChoice : uses prompt() to make a case in-sensitive input from player
playRound : determines a winner from the other two inputs
playGame : loops the round 5 times, keeps score, and at the end, outputs a winner.

For random selection : random * 3 + 2 : 2 = Rock, 3 = Paper, 4 = Scissors.
For case insensitivity : convert all string input to lowercase.
For conversion from string to number : if (string === "rock") then choice = 2.
For comparison :  on paper.
If getPlayerChoice returns as 0, cut the loop and restart player choice.*/

// START CODE FOR ROCK, PAPER, SCISSORS:

// let tie = false;                            <-- May be useful later, but not needed in current version...
let playerWins = 0;
let computerWins = 0;

// getComputerChoice() : function that returns a random number between 2 & 4, 2=R 3=P 4=S. 
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 2);
}

// getPlayerChoice() : function that displays prompt to player, takes case in-sensitive input, and returns 2-4 for rock, paper, or scissors. 
// If the player input is invalid, it is logged to the player and this function returns 0, which also returns the playRound function early. In order to give the player another shot at guessing.
function getPlayerChoice() {
    // Prompts player
    let input = prompt("Guess: Rock, Paper or Scissors!");
    // Converts player Input to lower case.
    input = input.toLowerCase();
    // Converts player Input String into a number for easier handling.
    switch (input) {
        case "rock" :
                return 2;
            break;
        case "paper" :
                return 3;
            break;
        case "scissors" :
                return 4;
            break;
        default :
        console.log(`Sorry, \"${input}\" is not a valid guess.`);
        return 0;
    }
}

// playRound() : Function where most of the logic for the game is contained here currently.
function playRound() {
    // takes both choices, and copies them into a local variable for easier handling.
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(); 
    // cuts playRound() short, if the player enters an invalid guess.
    if (playerChoice === 0) {
        return 0;
    }
    // function for printing both choices to the console.
    function displayChoices() {
        // function for converting both choices from a number back into a string
        function convertChoiceString(choice){
            if (choice === 2) {
                return "Rock!";
            } else if (choice === 3) {
                return "Paper!";
            } else if (choice === 4) {
                return "Scissors!";
            } else {
                return " ";
            }
        }
        // copies a converted version of both choices into a new string verson of computer and player choices.
        let computerChoiceString = convertChoiceString(computerChoice)
        let playerChoiceString = convertChoiceString(playerChoice)
        // logs both choices in string format.
        console.log(`YOU: ${playerChoiceString}`)
        console.log(`CPU: ${computerChoiceString}`)
    }
    
    // prints choices to console
    displayChoices();
    // handles the logic for Rock vs Paper vs Scissors, and determines who won.
    didWin();

    // function for handling the logic for Rock vs Paper vs Scissors, determining who won, adding to win counts, and displaying round winner messages.
    function didWin(){
        // Tie : does not add to cpu or player wins, allowing the game to continue after a tie occurs.
        if(computerChoice == playerChoice) {
            console.log("It's a tie!");
            // tie = true;                            <-- May be useful later, but not needed in current version...
            return 0;
        }
        // The Following 3 "else if's" handle the win decision logic, round winner console messages & adding to the win counts of CPU or Player.
         else if (computerChoice == 2) {
            if (playerChoice == 3) {
                console.log("Paper beats Rock, you win the round!");
                playerWins++;
                return 1;
            } else {
                console.log("Rock beats Scissors, you lose the round!");
                computerWins++
                return 1;
            }
        } else if (computerChoice == 3) {
            if (playerChoice == 4) {
                console.log("Scissors beats Paper, you win the round!");
                playerWins++;
                return 1;
            } else {
                console.log("Paper beats Rock, you lose the round!");
                computerWins++
                return 1;
            }
        } else if (computerChoice == 4) {
            if (playerChoice == 2) {
                console.log("Rock beats Scissors, you win the round!");
                playerWins++;
                return 1;
            } else {
                console.log("Scissors beats Paper, you lose the round!");
                computerWins++;
                return 1;
            }
        }
        // This is an easter egg message, should not ever pop up in-game, I think... 
        else {
            console.log("How on earth did you get this message to pop up?");
        }
    }
}

// playGame() : Function that nests all of the other functions currently. It loops the rounds until the combined contestants have won 5 games. 
//Also displays a message for who won the overall game, by winning the most rounds.
function playGame() {
    // Loops playRound() until both contestants wins add up to a total of 5 wins.
    while ((playerWins + computerWins) <= 4) {
            playRound();
    }
    // Displays to console who won the overall game.
    if (playerWins > computerWins) {
        console.log(`Congratulations! Out of 5 rounds, you beat the Computer ${playerWins} to ${computerWins}!`);
    } else {
        console.log(`Bummer! Out of 5 rounds you lost to the Computer ${playerWins} to ${computerWins}!`);
    }
}

playGame();