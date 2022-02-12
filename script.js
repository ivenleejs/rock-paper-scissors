function computerPlay() {
    let pick = Math.floor(Math.random() * 3);

    switch (pick) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "non-valid case - computerPlay";
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerSelection;
    if (player === computer) {
        return "It's a tie!";
    }
    else {
        switch (player) {
            case "rock":
                if (computer == "scissors") {
                    return "You win! Rock beats Scissors";
                }
                else return "You lose! Paper beats Rock";
                break;
            case "paper":
                if (computer == "rock") {
                    return "You win! Paper beats Rock";
                }
                else return "You lose! Scissors beats Paper";
                break;
            case "scissors":
                if (computer == "paper") {
                    return "You win! Scissors beats Paper";
                }
                else return "You lose! Rock beats Scissors";
                break;
            default:
                return "non-valid case - playRound"
        }
    }
}

function game(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

const playerSelection = "rock";
game(5);
