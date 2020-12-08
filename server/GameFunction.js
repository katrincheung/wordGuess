import random from "./Random.js";

const wordList = ['apple', 'orange', 'pear', 'banana'];
const roomWordDict = {};


function removeDuplicateWords(wordList) {
    //todo
    return wordList;
}

export function sendWord(room, code){
    const guessPlayer = room[random(room.length)];
    const word = wordList[random(wordList.length)];
    room.forEach(player => {
        if(player != guessPlayer)
            player.ws.send(`WORD ${word}`)
    });
    guessPlayer.ws.send('GUESS_PLAYER');
    roomWordDict[code] = [];
}

export function receiveWord(word, code, room){
    roomWordDict[code].push(word);
    console.log(roomWordDict);
    console.log(room.length-1);
    if(roomWordDict[code].length == room.length-1){
        console.log('receive all hints');
        roomWordDict[code] = removeDuplicateWords(roomWordDict[code]);
        room.forEach(player => player.ws.send(['HINT_LIST',roomWordDict[code].join(' ')].join(' ')));
    }
}

