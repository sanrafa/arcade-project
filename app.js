const game = {
    players: {
        player1: 'X',
        player2: 'O'
    },
    firstPlayer: function () {
        let i = Math.round(Math.random());
        if (i === 0) return game.players.player1;
        else return game.players.player2;
    },
    playerX: undefined,
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
};

// game.board = [
//     ['X', 'O', 'X'],
//     ['O', 'X', 'X'],
//     ['O', 'O', 'O']
// ]

//DETERMINE WHO GOES FIRST
/* const goesFirst = game.firstPlayer();
game.playerX = goesFirst; */

function makeMove (player, cellId) {
    // board will be HTML table, each cell with id corresponding to letters A-I
    // when player clicks cell, that cellId is space entered in function
    // i.e. - makeMove (playerX, A)
    let symbol;
    if (player === 'X') symbol = 'X';
    else symbol = 'O';
    console.log(symbol);
    // insert checker if cell is occupied
    switch (cellId) { // switch updates cell according to id
        case 'A':
            game.board[0][0] = symbol;
            break;
        case 'B':
            game.board[0][1] = symbol;
            break;
        case 'C':
            game.board[0][2] = symbol;
            break;
        case 'D':
            game.board[1][0] = symbol;
            break;
        case 'E':
            game.board[1][1] = symbol;
            break;
        case 'F':
            game.board[1][2] = symbol;
            break;
        case 'G':
            game.board[2][0] = symbol;
            break;
        case 'H':
            game.board[2][1] = symbol;
            break;
        case 'I':
            game.board[2][2] = symbol;
            break;
    }
  console.log(game.board);  
}

//could call func multiple times as test suite
makeMove(game.players.player2, 'H');

makeMove(game.players.player1, 'A');