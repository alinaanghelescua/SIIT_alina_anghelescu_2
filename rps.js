var playerScore = 0;
var computerScore = 0;
const score = document.getElementById('score');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const modal = document.querySelector('.modal');
const modalWinner = document.getElementById('winner');
const computerChoiceModal = document.getElementById('computerChoiceModal');
const closeModal = document.getElementById('close-modal');
const playerScoreCount = document.getElementById('player-score');
const computerScoreCount = document.getElementById('computer-score');


var gameChoice = ["rock", "paper", "scissors"];
var randomChoiceIndex = Math.floor(Math.random() * 3);
var pcChoice = gameChoice[randomChoiceIndex];


function playGame(type) {
    var userChoice = document.getElementById("user-choice-" + type);
    userChoice.addEventListener("click", function () {
        // console.log("PC choice is " + pcChoice)
        // console.log("user choice - " + type);
        // console.log(whoWins(pcChoice, type));
        showResult(whoWins, pcChoice);

    });
    reset.style.display = 'inline-block';
    closeModal.addEventListener('click', function(e) {
            modal.style.display = 'none';        
        })
}

var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function () {
    playGame("rock");
    playGame("paper");
    playGame("scissors");
})

function whoWins(pcChoice, userChoice) {
    switch (userChoice) {
        case "rock":
            switch (pcChoice) {
                case "rock":
                    return "Tie";
                case "paper":
                    return "PC wins";
                case "scissors":
                    return "User wins";
                default:
            }
            break;
        case "paper":
            switch (pcChoice) {
                case "rock":
                    return "User wins";
                case "paper":
                    return "Tie";
                case "scissors":
                    return "PC wins";
                default:
            }
            break;
        case "scissors":
            switch (pcChoice) {
                case "rock":
                    return "PC wins";
                case "paper":
                    return "User wins";
                case "scissors":
                    return "Tie";
                default:
            }
            break;
        default:
            break;
    }
}

function showResult(whoWins, pcChoice) {
    if (whoWins == "User wins") {
        playerScore++;
        modalWinner.innerHTML = 'You win!';
        computerChoiceModal.innerHTML = 'Computer chose ' + pcChoice;
    } else if (whoWins == "PC wins") {
        computerScore++;
        modalWinner.innerHTML = 'Computer wins!'
        computerChoiceModal.innerHTML = 'Computer chose ' + pcChoice;
    } else {
        modalWinner.innerHTML = 'Tie!'
        computerChoiceModal.innerHTML = 'Computer chose ' + pcChoice;
    }

    computerScoreCount.innerHtml = 'Computer: ' + computerScore;
    playerScoreCount.innerHTML = 'Player: ' + playerScore;

    modal.style.display = 'block';
   
        
}




