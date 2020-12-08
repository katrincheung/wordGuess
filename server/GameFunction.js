

function sendWord(ws) {
    ws.send('GAME_START');
    ws.send('word');
}

function sendGuessMessage(ws, word) {
    ws.send('You are the guess player');
}

function removeDuplicateWords(wordList) {
    //todo
    return wordList;
}

function game(wsList, room){

}

