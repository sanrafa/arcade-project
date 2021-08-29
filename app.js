let gameState = {
    players: {
        player1: null,
        player2: null
    },
    playerX: null,
    playerO: null,
    currentTurn : 0,
    currentPlayer: null,
    winner: null,
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
};

//  EVENT LISTENERS

let cellA = document.getElementById('A');
let cellB = document.getElementById('B');
let cellC = document.getElementById('C');
let cellD = document.getElementById('D');
let cellE = document.getElementById('E');
let cellF = document.getElementById('F');
let cellG = document.getElementById('G');
let cellH = document.getElementById('H');
let cellI = document.getElementById('I');


function activateBoard () {
    cellA.addEventListener('click', placePiece);
    cellB.addEventListener('click', placePiece);
    cellC.addEventListener('click', placePiece);
    cellD.addEventListener('click', placePiece);
    cellE.addEventListener('click', placePiece);
    cellF.addEventListener('click', placePiece);
    cellG.addEventListener('click', placePiece);
    cellH.addEventListener('click', placePiece);
    cellI.addEventListener('click', placePiece);
}



// BUTTONS
let newGameBtn = document.getElementById('new-game');
newGameBtn.addEventListener('click', newGame);

let startGameBtn = document.getElementById('ready');
startGameBtn.addEventListener('click', submitNames);

//EXIT GAME uses inline onclick function

// GAME FUNCTIONS

function inputPlayerNames (player, name) {
    gameState.players['player' + player] = name;
}

function displayNames () {
    let playerXName = document.getElementById('playerX-name');
    let playerOName = document.getElementById('playerO-name');
    playerXName.innerText = 'X - ' + gameState.playerX;
    playerOName.innerText = gameState.playerO + ' - O';  
}

function submitNames () {
    let player1Name = document.getElementById('player1-name').value;
    let player2Name = document.getElementById('player2-name').value;
    if (player1Name === '' || player2Name === '') {
        document.querySelector('h1').style.fontSize = '1.5rem';
        document.querySelector('h1').innerText = 'Come on, they can be fake names';
        setTimeout(() => {
            document.querySelector('h1').style.fontSize = '3rem';
            document.querySelector('h1').innerText = 'Tic Tac Toe';
        }, 3000)
        return;
    }
    player1Name = player1Name.toUpperCase();
    player2Name = player2Name.toUpperCase();
    inputPlayerNames(1, player1Name);
    inputPlayerNames(2, player2Name);
    whoGoesFirst();
    displayNames();
    beginTurn();
    document.getElementById('name-submit').style.display = 'none';
    activateBoard();
    newGameBtn.style.visibility = 'visible';
}

function newGame () {
    document.getElementById('playerO-name').style.visibility = 'visible';
    document.getElementById('playerX-name').style.visibility = 'visible';
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
    document.querySelector('h1').style.fontSize = '3rem';
    document.querySelector('h1').innerText = 'Tic Tac Toe';
    document.getElementById('board').style.visibility = 'visible';
    gameState.playerO = null;
    gameState.playerX = null;
    gameState.currentTurn = 0;
    gameState.currentPlayer = null;
    gameState.winner = null;
    gameState.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    whoGoesFirst();
    displayNames();
    beginTurn();
}

function placePiece () {
    let target = event.target;
    let cellId = target.getAttribute('id');
    makeMove(cellId);
    document.getElementById(cellId).innerText = gameState.currentPlayer;
    checkGameState();
    if (gameState.currentTurn < 9) {
        beginTurn();
    }
}

function checkGameState () {
    checkRows();
    checkColumns();
    checkDiags();
    if (gameState.currentTurn === 9 || gameState.winner !== null) {
        endGame();
    } else {
        return;
    }
}

function declareWinner (winner) { 
    if (winner === 'X') {
        gameState.winner = gameState.playerX;
    } else if (winner === 'O') {
        gameState.winner = gameState.playerO;
    }
}

function endGame () {
    declareWinner(gameState.winner);
    let winner = gameState.winner;
    document.getElementById('board').style.visibility = 'hidden';
    document.getElementById('playerO-name').style.visibility = 'hidden';
    document.getElementById('playerX-name').style.visibility = 'hidden';
    if (winner !== null) {
        document.querySelector('h1').style.fontSize = '1.5rem';
        document.querySelector('h1').innerText = `${winner} has won the game!`;
    } else {
        document.querySelector('h1').style.fontSize = '1.5rem';
        document.querySelector('h1').innerText = "Uh oh - there's a draw!";
    }
}

function whoGoesFirst () {
    let first = Math.round(Math.random());
    if (first === 0) {
        gameState.playerX = gameState.players.player1;
        gameState.playerO = gameState.players.player2;
    } else if (first === 1) {
        gameState.playerX = gameState.players.player2;
        gameState.playerO = gameState.players.player1;
    }
}

function beginTurn () {
    if (gameState.currentTurn < 9) {
        gameState.currentTurn += 1;
    } else { throw new Error ('The game has ended')};
    if (gameState.currentTurn % 2 === 0) {
        gameState.currentPlayer = 'O';
        document.getElementById('playerO-name').style.fontWeight = '700';
        document.getElementById('playerX-name').style.fontWeight = '400';
    } else { 
        gameState.currentPlayer = 'X';
        document.getElementById('playerO-name').style.fontWeight = '400';
        document.getElementById('playerX-name').style.fontWeight = '700';
    }
}

function makeMove (cell) {
    const symbol = gameState.currentPlayer;
    switch (cell) { // switch updates cell according to id
        case 'A':
            if (gameState.board[0][0] === null) {
                gameState.board[0][0] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'B':
            if (gameState.board[0][1] === null) {
                gameState.board[0][1] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'C':
            if (gameState.board[0][2] === null) {
                gameState.board[0][2] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'D':
            if (gameState.board[1][0] === null) {
                gameState.board[1][0] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'E':
            if (gameState.board[1][1] === null) {
                gameState.board[1][1] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'F':
            if (gameState.board[1][2] === null) {
                gameState.board[1][2] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'G':
            if (gameState.board[2][0] === null) {
                gameState.board[2][0] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'H':
            if (gameState.board[2][1] === null) {
                gameState.board[2][1] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
        case 'I':
            if (gameState.board[2][2] === null) {
                gameState.board[2][2] = symbol;
            } else {
                throw new Error ('That cell is occupied!');
            }
            break;
    }
}

function checkRows () {
    let player = gameState.currentPlayer;
    for (let i = 0; i < 3; i++) {
        let counter = 0;
        for (let cell of gameState.board[i]) {
            if (cell === player) {
                counter++;
                continue;
            }
        }
        if (counter === 3) {
            gameState.winner = player;
            return;
        }
    }
    return;
}

function checkColumns () {
    let player = gameState.currentPlayer;
    for (let i = 0; i < 3; i++) {
        let counter = 0;
        for (let j = 0; j < 3; j++) { //board[j][i]
            if (gameState.board[j][i] === player) {
                counter++;
                continue;
            }
        }
        if (counter === 3) {
            gameState.winner = player;
            return;
        }
    }
    return;
}

function checkDiags () {
    let player = gameState.currentPlayer;
    let counter = 0;
    for (let i = 0; i < 3; i++) {
        if (gameState.board[i][i] === player) { //check diagonal from left
            counter++;
            continue;
        }
    }
    if (counter === 3) {
        gameState.winner = player;
        return;
    } else {
        if ( //check diagonal from right
            gameState.board[0][2] === player &&
            gameState.board[1][1] === player &&
            gameState.board[2][0] === player
        ) {
            gameState.winner = player;
            return;
        } else {
            return;
        }  
    }
}


