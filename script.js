

const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return options[Math.floor(Math.random()  * 3)];
}

function playRound(player, computer) {
    if (player == computer) {
        return 'Tie';
    } else {
        switch (player) {
            case 'rock':
                if (computer == 'paper') {
                    return "You lose! Paper beats Rock!";
                } else if (computer == 'scissors') {
                    return "You win! Rock beats Scissors!";
                }
            case 'paper':
                if (computer == 'scissors') {
                    return "You lose! Scissors beat Paper!";
                } else if (computer == 'rock') {
                    return "You win! Paper beats Rock!";
                }
            case 'scissors':
                if (computer == 'paper') {
                    return "You win! Scissors beat Paper!";
                } else if (computer == 'rock') {
                    return "You lose! Rock beats Scissors!";
                }
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let player;
        do {
            player = prompt("rock/paper/scissors")
        } while (options.indexOf(player) < 0);
        let computer = computerPlay();

        alert(playRound(player, computer));
    }
}

game();