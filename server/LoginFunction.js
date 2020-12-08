
const wsDict = {};
const rooms = {};
export default function handleLoginRequest(ws, name, code) {
    console.log('handleLoginRequest');
    if(code in rooms){
        ws.send('GUEST_PLAYER');
        rooms[code].push(name);
        wsDict[code].push(ws);
        wsDict[code].forEach( ws => ws.send(['PLAYER_LIST',rooms[code].join(' ')].join(' ')) );
    }else {
        ws.send(`HOST_PLAYER ${code}`);
        rooms[code] = [name];
        wsDict[code] = [ws];
        ws.send(`PLAYER_LIST ${name}`);
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

export function handleGameStartRequest(ws, code) {
    wsDict[code].forEach( ws => ws.send('GAME_START') );
}