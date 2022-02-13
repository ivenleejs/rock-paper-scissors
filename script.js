let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection) {
    player = playerSelection.toLowerCase();
    computer = computerPlay();
    if (player === computer) {
        return "It's a tie!";
    }
    else {
        switch (player) {
            case "rock":
                if (computer == "scissors") {
                    playerScore += 1;
                    return "You win! Rock beats Scissors";
                }
                else {
                    computerScore += 1;
                    return "You lose! Paper beats Rock";
                    break;
                }
            case "paper":
                if (computer == "rock") {
                    playerScore += 1;
                    return "You win! Paper beats Rock";
                }
                else {
                    computerScore += 1;
                    return "You lose! Scissors beats Paper";
                    break;
                }
            case "scissors":
                if (computer == "paper") {
                    playerScore += 1;
                    return "You win! Scissors beats Paper";
                }
                else {
                    computerScore += 1;
                    return "You lose! Rock beats Scissors";
                    break;  
                } 
            default:
                return "non-valid case - playRound"
        }
    }
}

function result(innerText) {
    const result = document.querySelector('#result');
    result.innerText = innerText;
    console.log(`"${innerText}" was printed.`)
}

function game(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        console.log(playRound(playerSelection));
    }
}


const score = document.querySelector('#score');
function updateScore() {

    if (playerScore >= 5) {
        score.innerText = `${playerScore} - ${computerScore}`;
        result('You won 5 times, you\'re the winner!');
        resetScore();
    }
    else if (computerScore >= 5){
        score.innerText = `${playerScore} - ${computerScore}`;
        result('You\'ve lost 5 times. The computer wins!');
        resetScore();
    }
    else {
        score.innerText = `${playerScore} - ${computerScore}`;
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', () => {
    result(playRound('rock')); 
    updateScore();
});

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', () => {
    result(playRound('paper')); 
    updateScore();
    });

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click', () => {
    result(playRound('scissors')); 
    updateScore();
});