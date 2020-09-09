const startGameBtn = document.getElementById('start-game-btn');

// startGame = () => {
//     console.log('Game is starting...');
// };

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTE_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoise = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
    selection !== ROCK && 
    selection !== PAPER && 
    selection !== SCISSORS) {
        alert(`Invalid Choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return;
    }
    return selection;
};

const getComputerChoise = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// arrow function, retorna ternary operator
// Se passar undifined pChoice pegará o default value
// se nao passar arg ao chamar a func , será undifined
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
        cChoice === pChoice ? RESULT_DRAW : 
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK ? 
        RESULT_PLAYER_WINS : RESULT_COMPUTE_WINS

    
startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoise(); 
    const computerChoice = getComputerChoise();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice); //might be undefined
    } else {
        winner = getWinner(computerChoice); //se a var n tiver set, será undefind
    }
    
    
    console.log(winner);
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, you `;
    if (winner === RESULT_DRAW) {
        message += 'had a draw.'
    } else if (winner === RESULT_PLAYER_WINS) {
        message += 'won.'
    } else {
        message += 'lose.'
    }
    alert(message);
    gameIsRunning = false;
});


