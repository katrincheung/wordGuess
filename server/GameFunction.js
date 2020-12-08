

function sendStartMessage(socket) {
    socket.send('GAME_START');
    socket.send('word');
}

function sendGuessMessage(socket, word) {
    socket.send('GameStartMessage');
    socket.send('You are the guess player');
    socket.send('Message is finished!!!');
}

function removeDuplicateWords(wordList) {
    //todo
    return wordList;
}

