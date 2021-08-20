# Arcade Project - Tic-Tac-Toe

## Requirements
### 2 Players
- players must be able to input their names and see them displayed
- players must have their order (i.e. X || O) determined randomly
    - X goes first
- each turn, a player selects an empty cell to place their symbol
- players must be unable to place their symbol on an occupied space
- players must be notified when a move results in a win or draw
    - after end state, players cannot interact with game
- players must be able to restart game without refreshing the page

### 1 Player

- all requirements above, except "Computer" is the opponent
- Computer must make moves in a way that resembles a human player

----

## Game State

```
const game = {
    players: [x, o] // add name input method later
    firstPlayer: game.players[idx] // idx = Math.round(Math.random());
    currentPlayer: // each turn, game.players[idx + 1 OR idx - 1]
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    /* 
    game.board[0 ... 2] = rows
    game.board[row][0 ... 2] = columns
    {game.board[0][0], game.board[1][1], game.board[2][2]}
    or
    {game.board[0][2], game.board[1][1], game.board[2][0]} = diagonals
    */ 

}
```

#### Items to track
- Players
    - how many (1 or 2)
    - names
    - who goes first
    - whose turn it is
- Board
    - which spaces are empty
    - which spaces are *occupied* and by which players
    - whether a winning move has been triggered
    - if there are any available moves
        - if after 8th turn, final space will not trigger win, game ends in draw
- Webpage
    - display player names & roles
    - who is active player
    - what is current board state
    - endgame notification