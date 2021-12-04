

const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return options[Math.floor(Math.random()  *  3)];
}

let wins = 0, losses = 0, ties = 0;

function playRound(player, computer) {
    if (player == computer) {
        ties++;
        return 'Tie';
    } else {
        switch (player) {
            case 'rock':
                if (computer == 'paper') {
                    losses++
                    return "You lose! Paper beats Rock!";
                } else if (computer == 'scissors') {
                    wins++;
                    return "You win! Rock beats Scissors!";
                }
            case 'paper':
                if (computer == 'scissors') {
                    losses++;
                    return "You lose! Scissors beat Paper!";
                } else if (computer == 'rock') {
                    wins++;
                    return "You win! Paper beats Rock!";
                }
            case 'scissors':
                if (computer == 'paper') {
                    wins++;
                    return "You win! Scissors beat Paper!";
                } else if (computer == 'rock') {
                    losses++;
                    return "You lose! Rock beats Scissors!";
                }
        }
    }
}


const buttons = document.querySelectorAll('.option');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const player = button.id;
        const computer = computerPlay();

        const result = playRound(player, computer);

        const playerChoiceBox = document.querySelector('#player-choice');
        playerChoiceBox.textContent = player;

        const computerChoiceBox = document.querySelector('#computer-choice');
        computerChoiceBox.textContent = computer

        const display = document.querySelector('#display');
        const winsBox = document.querySelector('#wins');
        const lossesBox = document.querySelector("#losses");
        const tiesBox = document.querySelector("#ties");

        display.textContent = result;
        winsBox.textContent = "wins: " + wins;
        lossesBox.textContent = "losses: " + losses;
        tiesBox.textContent = "ties: " + ties;
    });
});