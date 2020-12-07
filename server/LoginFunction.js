let player = [];
let wsList = [];

export default function handleLoginRequest(ws, name, code) {
    console.log('handleLoginRequest');
    if (player.length == 0){
        ws.send('HOST_PLAYER');
        console.log('send host')
    }else{
        ws.send('GUEST_PLAYER');
    }
    player.push(name);
    wsList.push(ws);
    console.log(`player list = ${player}`);
    wsList.forEach( playerSocket => playerSocket.send(['PLAYER_LIST',player.join(' ')].join(' ')) );
}

export function handleGameStartRequest() {
    wsList.forEach( playerSocket => playerSocket.send('GAME_BEGIN') );
}