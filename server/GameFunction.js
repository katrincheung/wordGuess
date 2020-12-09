import random from "./Random.js";

const wordList = ['apple', 'orange', 'pear', 'banana'];
const roomWordDict = {};
const roomAns = {};

function removeDuplicateWords(wordList) {
    const temp = {};
    const newWordList = [];
    wordList.forEach(word => {
        if(word in temp){
            temp[word] += 1;
        }else {
            temp[word] = 0;
        }
    })
    for (let word in temp){
        if(temp[word] === 0){
            newWordList.push(word);
        }
    }
    return newWordList;
}

export function sendWord(room, code){
    const guessPlayer = room[random(room.length)];
    const word = wordList[random(wordList.length)];
    roomAns[code] = word;
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
    if(roomWordDict[code].length == room.length-1){
        console.log('receive all hints');
        roomWordDict[code] = removeDuplicateWords(roomWordDict[code]);
        room.forEach(player => player.ws.send(['HINT_LIST',roomWordDict[code].join(' ')].join(' ')));
    }
}

export function checkAns(guessWord, code, room) {
    room.forEach(player => player.ws.send(`RESULT ${roomAns[code]} ${guessWord}`))
}

