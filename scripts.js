// DOCUMENTATION: 2=rock, 3=paper, 4=scissors.

let playerWins = 0;
let computerWins = 0;
let playerChoice = 0;
let outcome = "";

const topContainer = document.querySelector(".topContainer");
const outcomeDisplay = document.querySelector("#outcomeDisplay");
const playerRoundWinsDisplay = document.querySelector("#playerRoundWinsDisplay");
const computerRoundWinsDisplay = document.querySelector("#computerRoundWinsDisplay");
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");

function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 2);
}

function convertChoiceToString(choice){
    if (choice === 2) {
        return "ROCK";
    } else if (choice === 3) {
        return "PAPER";
    } else if (choice === 4) {
        return "SCISSORS";
    } else {
        return " ";
    }
}

topContainer.addEventListener("click", (event) => {
    let target = event.target;
    if (target.id !== "") {
        switch(target.id) {
            case "rock":
                playerChoice = 2;
            break;

            case "paper":
                playerChoice = 3;
            break;

            case "scissors":
                playerChoice = 4;
            break;
        }
        let playerChoiceString = convertChoiceToString(playerChoice);
        playerChoiceDisplay.textContent = `${playerChoiceString}`;
        let computerChoice = getComputerChoice();
        let computerChoiceString = convertChoiceToString(computerChoice);
        computerChoiceDisplay.textContent = `${computerChoiceString}`;
        function calcRoundWinner(){
            if(computerChoice == playerChoice) {
                outcome = "-";
                return 0;
            }
            // The Following 3 "else if's" handle the win decision logic, round winner console messages & adding to the win counts of CPU or Player.
                else if (computerChoice == 2) {
                if (playerChoice == 3) {
                    outcome = "WIN";
                    playerWins++;
                    return 1;
                } else {
                    outcome = "LOSS";
                    computerWins++
                    return 1;
                }
            } else if (computerChoice == 3) {
                if (playerChoice == 4) {
                    outcome = "WIN";
                    playerWins++;
                    return 1;
                } else {
                    outcome = "LOSS";
                    computerWins++
                    return 1;
                }
            } else if (computerChoice == 4) {
                if (playerChoice == 2) {
                    outcome = "WIN";
                    playerWins++;
                    return 1;
                } else {
                    outcome = "LOSS";
                    computerWins++;
                    return 1;
                }
            }
            // This is an easter egg message, should not ever pop up in-game, I think... 
            else {
                outcome = "HUH?";
            }
        }
        calcRoundWinner();
        outcomeDisplay.textContent = `${outcome}`;
        playerRoundWinsDisplay.textContent = `YOUR WINS: ${playerWins}`;
        computerRoundWinsDisplay.textContent = `CPU WINS: ${computerWins}`;
        playerChoice = 0;
        if (playerWins >= 5 || computerWins >= 5) {
            if (playerWins > computerWins) {
                outcome = `CONGRATULATIONS! YOU HAVE WON ${playerWins} to ${computerWins}!`;
                outcomeDisplay.textContent = `${outcome}`;
            } else {
                outcome = `BRUH... 
                YOU LOST ${playerWins} to ${computerWins}.`;
                outcomeDisplay.textContent = `${outcome}`;
            }
            playerWins = 0;
            computerWins = 0;
        }
    }
});