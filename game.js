let gameState = {
    players: {
        numOfPlayers: 0,
        player1: null,
        player2: null
    },
    firstPlayer: null,
    currentTurn : 0,
    currentPlayer: null,
    winner: null,
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
};

/* Note: 
    firstPlayer is always X */

// if 1 player, run once; if 2 players, run twice
function inputPlayerNames (player, name) {
    gameState.players['player' + player] = name;
    if (gameState.players.numOfPlayers === 1) {
        gameState.players.player2 = 'Computer';
    }
}

function whoGoesFirst () {
    let first = Math.round(Math.random());
    if (first === 0) {
        gameState.firstPlayer = gameState.players.player1;
    } else if (first === 1) {
        gameState.firstPlayer = gameState.players.player2;
    }
}

function beginTurn () {
    if (gameState.currentTurn < 9) {
        gameState.currentTurn += 1;
    } else { throw new Error ('The game has ended')};
    if (gameState.currentTurn % 2 === 0) {
        gameState.currentPlayer = 'O';
    } else { gameState.currentPlayer = 'X'};
}

function makeMove (cell) {
    // in real game cell = event.target.id
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

// TODO - refactor output of game checkers

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
            console.log(`Player ${player} has won!`);
            return;
        }
    }
    console.log('No winner yet');
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
            console.log(`Player ${player} has won!`);
            return;
        }
    }
    console.log('No winner yet');
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
        console.log(`Player ${player} has won!`);
        return;
    } else {
        if ( //check diagonal from right
            gameState.board[0][2] === player &&
            gameState.board[1][1] === player &&
            gameState.board[2][0] === player
        ) {
            gameState.winner = player;
            console.log(`Player ${player} has won!`);
            return;
        } else {
            console.log('No winner yet');
            return;
        }  
    }
}

function checkGameState () {
    checkRows();
    checkColumns();
    checkDiags();
    if (gameState.currentTurn === 9 && gameState.winner === null) {
        console.log("It's a draw!");
        return;
    }
}

// TEST SETUP

gameState.players.numOfPlayers = 2;

inputPlayerNames(1, 'test');
inputPlayerNames(2, 'test2');
whoGoesFirst();
// turn 1 - X
beginTurn();
makeMove('A');
// turn 2 - O
beginTurn();
makeMove('C');
// turn 3 - X
beginTurn();
makeMove('B');
// turn 4 - O
beginTurn();
makeMove('E');
// turn 5 - X
beginTurn();
makeMove('I');
// turn 6 - O
beginTurn();
makeMove('D');
// turn 7 - X
beginTurn();
makeMove('F');
// turn 8 - O
beginTurn();
makeMove('G');
// turn 9 - X
beginTurn();
makeMove('H');


// checkRows();
// checkColumns();
// checkDiags();
checkGameState();


console.log(gameState);

//EVENT LISTENERS



// ********** GAME FLOW **********

// STAGE ONE
// inputPlayerNames
/* 
    - if 2 players selected, players are prompted to enter their names.
    - if 1 player, 'Computer' is always player 2
    - names assigned to gameState.players.player1 & gameState.players.player2
*/

// whoGoesFirst
/* 
    - use Math.round(Math.random()) to choose randomly between 0 and 1
    - if 0 => Player 1; if 1 => Player 2
    - gameState.firstPlayer = result
*/

//--------------------------------

//STAGE TWO

// beginTurn
/* 
    - currentTurn++; 9 turns total
    - if currentTurn is odd, X; if even, O
    - update currentPlayer with X or O
*/

// makeMove
/* 
    - symbol = currentPlayer
    - take player input, i.e. ID of clicked cell
    --- if gameState.board[][] != null, throw error, restart at same iteration
    - update gameState.board with that symbol
    - update HTML to hold that symbol at cell
    - run beginTurn
*/
//--------------------------------

//STAGE THREE

// checkGameState
/* 
    three helpers: checkRows, checkColumns, checkDiags
    - at end of each turn, checkGameState sees if winning move has been made
        - if so, return dialog `[player] has won!` 
    - after 9th turn, if no win achieved, return `It's a draw`
*/

