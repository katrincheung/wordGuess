let player = [];
let wsList = [];

export default function handleLoginRequest(ws, name, code) {
    if (player.length == 0){
        ws.send('HOST_PLAYER');
    }else{
        ws.send('GUEST_PLAYER');
    }
    player.push(name);
    wsList.push(ws);
    console.log(`player list = ${player}`);
    wsList.forEach( playerSocket => playerSocket.send(`PLAYER_LIST ${player.join(' ')}`) );
}

export default function handleGameStartRequest() {
    wsList.forEach( playerSocket => playerSocket.send('GAME_BEGIN') );
}