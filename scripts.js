// DOCUMENTATION: 2=rock, 3=paper, 4=scissors.

let playerWins = 0;
let computerWins = 0;

// computer choice between 2-4.
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 2);
}

// returns either 2-4 ( choice ) or 0 ( invalid choice )
function getPlayerChoice() {
    let playerInput = prompt("Guess: Rock, Paper or Scissors!");
    playerInput = playerInput.toLowerCase();

    // Convert playerInput into number for easier handling.
    switch (playerInput) {
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
        console.log(`Sorry, \"${playerInput}\" is not a valid guess.`);
        return 0;
    }
}

function convertChoiceToString(choice){
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

function playRound() {
    function calcRoundWinner(){
        if(computerChoice == playerChoice) {
            console.log("It's a tie!");
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
    function displayChoices() { 
        let computerChoiceString = convertChoiceToString(computerChoice)
        let playerChoiceString = convertChoiceToString(playerChoice)
        console.log(`YOU: ${playerChoiceString}`)
        console.log(`CPU: ${computerChoiceString}`)
    }

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice(); 
    if (playerChoice === 0) {
        return 0;
    }
    displayChoices();
    calcRoundWinner();
}

// Continues playing Rounds until either of the contestant's wins add up to a total of 5.
function playGame() {
    
    while ((playerWins + computerWins) <= 4) {
            playRound();
    }

    if (playerWins > computerWins) {
        console.log(`Congratulations! Out of 5 rounds, you beat the Computer ${playerWins} to ${computerWins}!`);
    } else {
        console.log(`Bummer! Out of 5 rounds you lost to the Computer ${playerWins} to ${computerWins}!`);
    }
}

playGame();