

function sendStartMessage(socket, word) {
    socket.send('GameStartMessage');
    socket.send(word);
    socket.send('Message is finished!!!');
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

