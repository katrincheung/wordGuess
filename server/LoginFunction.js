export default function handleLoginRequest(ws, name, code, wsDict, rooms) {
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
    return (wsDict, rooms);
}

export function handleGameStartRequest(wsList) {
    wsList.forEach( ws => ws.send('GAME_START') );
}