const gameSocket = io('/game');

const gameId = document.querySelector('#pageGameId').value
const playerId = document.querySelector('#pagePlayerId').value

$(window).on('load', () => {
    socket.emit('move', position);
})

gameSocket.on('get moves', () => {
    const pos = board.fen();
    console.log(board.fen());
    gameSocket.emit('moves list', {pos, gameId, playerId});
});

gameSocket.on('display moves', currentMoves => {
    console.log(currentMoves);


    $('#myBoard').on('click', function () {
        board.position(currentMoves);
    })
})
