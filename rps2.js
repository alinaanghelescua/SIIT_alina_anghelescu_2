var selections = document.querySelectorAll('.choice');
var score = document.getElementById('score');
var result = document.getElementById('result');
var reset = document.getElementById('reset');
var modal = document.getElementById('modal');
var closeModal = document.getElementById('close-modal');
var userChoice;
var pcChoice;
var playerScore = 0;
var computerScore = 0;

// event listeners



// play game
function playGame(type) {
    // user choice
    userChoice = document.getElementById("user-choice-" + type);
    userChoice.addEventListener("click", function () {
        // console.log("PC choice is " + pcChoice)
        // console.log("user choice - " + type);
        // console.log(whoWins(pcChoice, type))
        pcChoice = getPcChoice();
        showResult(whoWins, pcChoice);







        // showResult(whoWins, pcChoice());
    });

    reset.style.display = 'inline-block';
    closeModal.addEventListener('click', function (e) {
        modal.style.display = 'none';
    })
}

var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", function () {
    playGame("rock");
    playGame("paper");
    playGame("scissors");
})

// PC choice
function getPcChoice() {
    var gameChoice = ["rock", "paper", "scissors"];
    var randomChoiceIndex = Math.floor(Math.random() * 3);
    pcChoice = gameChoice[randomChoiceIndex];
    return pcChoice;
}


// winner
function whoWins(pcChoice, userChoice) {
    switch (userChoice) {
        case "rock":
            switch (pcChoice) {
                case "rock":
                    return "Tie";
                case "paper":
                    return "PC";
                case "scissors":
                    return "User";
                default:
            }
            break;
        case "paper":
            switch (pcChoice) {
                case "rock":
                    return "User";
                case "paper":
                    return "Tie";
                case "scissors":
                    return "PC";
                default:
            }
            break;
        case "scissors":
            switch (pcChoice) {
                case "rock":
                    return "PC";
                case "paper":
                    return "User";
                case "scissors":
                    return "Tie";
                default:
            }
            break;
        default:
            break;
    }
}
var modalWinner = document.getElementById('winner');
var computerChoiceModal = document.getElementById('computerChoiceModal');
var playerScoreCount = document.getElementById('player-score');
var computerScoreCount = document.getElementById('computer-score');
var userWins = "User";
var pcWins = "PC"



function showResult(whoWins, pcChoice) {
    if (whoWins === userWins) {
        playerScore++;
        playerScoreCount.innerHTML = 'Player: ' + playerScore;
        modalWinner.innerHTML = 'You win!';
        computerChoiceModal.innerHTML = 'Computer chose ' + pcChoice;
    } else if (whoWins === pcWins) {
        computerScore++;
        computerScoreCount.innerHtml = 'Computer: ' + computerScore;
        modalWinner.innerHTML = 'Computer wins!'
        computerChoiceModal.innerHTML = 'Computer chose ' + pcChoice;
    } else {
        modalWinner.innerHTML = 'Tie!'
        computerChoiceModal.innerHTML = 'Computer chose ' + pcChoice;
    }



    modal.style.display = 'block';


}


















