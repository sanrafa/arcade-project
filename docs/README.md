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
### Items to track
- Players
    - how many (1 or 2)
    - names
    - who goes first
    - whose turn it is
    - who is the winner
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

    ----
    # Functions

    ### inputPlayerNames(player, name)
    - if 2 players selected, run twice; 1 player - run once
    - *player* param refers to player # (1 or 2)
    - *name* param refers to player input from form
    - if only 1 player, Player 2 is named 'Computer'
    - this is recorded to *gameState.players* object
    - **DOM interaction:**

    ### whoGoesFirst()
    - generate 1 or 0 randomly
    - if 0, 'Player 1' goes first and is assigned X
    - if 1, 'Player 2' goes first and is assigned X
    - resultant player is recorded to gameState.firstPlayer
    - **DOM interaction:**

    ### beginTurn()
    - only run if less than 9 turns have been played
        - **NOTE** change error thrown into separate endGame function; refactor other funcs accordingly
    - gameState.currentTurn tracks # of turns played; iterate each turn
    - if .currentTurn is odd, it is X's turn
    - if .currentTurn is even, it is O's turn
        - recorded in gameState.currentPlayer

    ### makeMove(cell) *work-in-progress*
    - **requires refactoring:** *cell* param should be #id of cell player clicks
    - use gameState.currentPlayer to track appropriate symbol
    - switch updates cell in gameState.board
        - if cell is already occupied, throw error
    
    ### checkGameState()
    - checkRows() - check each row for a win, update gameState.winner if so
    - checkColumns() - same but columns
    - checkDiags() - same but diagonals, left & right
    - if it's end of final turn and no winner declared, it's a draw
    - **possible refactoring:** carry output into separate endGame function