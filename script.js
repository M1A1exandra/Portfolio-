console.log('Hello World!')

//HTML Elements   
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const messageText = document.querySelector('#message');
const xScoreText = document.querySelector('#x-score');
const oScoreText = document.querySelector('#o-score');
const drawScoreText = document.querySelector('#draw-score');

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let gameOver = false;
let moves = 0;
let xWins = 0;
let oWins = 0;
let draws = 0;


function playerTurn(event) {
    const square = event.target;
    console.log('Event Square:', square);
    if (square.textContent === "") {
        square.textConetnt = currentPlayer.textContent;
        moves = moves + 1;
        checkWinner();
        switchPlayer();
    }
}


//Change the current player to X
function switchPlayer() {

    if (currentPlayer.textContent === 'X') {
        currentPlayer.textContent = 'O';
    } else {
        currentPlayer.textContent = 'X';
    }
}



let counter = 0;

//Functions
function count() {
    counter = counter + 1;
    console.log('Count:' + counter);
}

function playerTurn(event) {
    const square = event.target;
    console.log('Event Square:', square);
    if (gameOver === true && square.textContent === "") {

    }

    console.log('Event Squares:', squares);

    if (square.textContent === "" && gameOver === false) {
        square.textContent = currentPlayer.textContent;
        moves = moves + 1;
        checkWinner();
        switchPlayer();
    }
}

function checkWinner() {
    for (const line of winningLines) {

        const first = squares[line[0]].textContent;
        const second = squares[line[1]].textContent;
        const third = squares[line[2]].textContent;
        if (first !== "" && first === second && first === third) {
            messageText.textContent = first + "wins!";
            gameOver = true;
            if (first === 'X') {
                xWins = xWins + 1;
                xScoreText.textContent = "X:" + xWins;
            } else {

                oWins = oWins + 1;
                oScoreText.textContent = "O:" + oWins;
            }
            return;
        }
    }
}
if (moves === 9) {
    messageText.textContent = "It's a draw!";
    gameOver = true;
    draws = draws + 1; drawScoreText.textContent = 'Draws:' + draws;
}

function resetGame() {
    for (const square of squares) {
        square.textContent = "";
    }
    currentPlayer.textContent = "X";
    gameOver = false;
    moves = 0;
    messageText.textContent = "";
}
//2.Create a function to change the text to an X
function changeTox() {
    square.textContent = 'X';
    currentPlayer.textContent = 'O';
}

//Change to 0
function changeToO() {
    square.textContent = '0'
    currentPlayer.textContent = 'X';
}

function changeSquare(event) {
    console.log('Click event:', event)
    const square = event.target;
    console.log('Square', square);
    square.textContent = 'X';
}
//Event Listeners
resetButton.addEventListener('click', count);
//square.addEventListener('click',changeSquareValue);

for (const square of squares) {
    square.addEventListener("click", playerTurn)
}
resetButton.addEventListener("click", resetGame);