import handleLoginRequest, { handleGameStartRequest } from "./LoginFunction.js";

let wsDict = {};
let rooms = {};

export default function handleSockets(ws, messageQueue) {
    if (messageQueue.length != 0){
        let command = messageQueue[0];
        switch(command){
            case 'NAME_INPUT':
                let name = messageQueue[1];
                let code = messageQueue[2];
                console.log(`name = ${name} code = ${code}`);
                wsDict, rooms = handleLoginRequest(ws, name, code, wsDict, rooms);
                break;
            case 'GAME_START':
                handleGameStartRequest(wsDict[messageQueue[1]]);
                break;
            case 'WORD_INPUT':
                let word = messageQueue[1];
                console.log(`inputWord = ${word}`);
                break;
            default:
                console.log(`unknownInput = ${messageQueue}`);
                break;
        }
    }
}

export function handleDisconnection() {
    let index = -1;
    let code = '';
    for (let wsList in wsDict) {
        wsDict[wsList].forEach( (ws, i) => {
            if(ws.readyState == 3){
                index = i;
                code = wsList;
            }
        })
    }
    if(index != -1){
        rooms[code].splice(index, 1);
        wsDict[code].splice(index, 1);
        if(index == 0){
            wsDict[code].forEach( ws => ws.send('HOST_DISCONNECTED'));
            delete wsDict[code];
            delete rooms[code];
        }else{
            wsDict[code].forEach( ws => ws.send(['PLAYER_LIST',rooms[code].join(' ')].join(' ')) );
        }
    }
}