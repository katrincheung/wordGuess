let players = [];
let wsList = [];

export default function handleLoginRequest(ws, name, code) {
    console.log('handleLoginRequest');
    if (players.length == 0){
        ws.send('HOST_PLAYER');
        console.log('send host')
    }else{
        ws.send('GUEST_PLAYER');
    }
    players.push(name);
    wsList.push(ws);
    console.log(`player list = ${players}`);
    wsList.forEach( ws => ws.send(['PLAYER_LIST',players.join(' ')].join(' ')) );
}

export function handleDisconnect() {
    console.log('one ws disconnected');
    let index = -1;
    wsList.forEach( (ws, i) => {
        if(ws.readyState == 3){
            index = i;
        }
    })
    if(index != -1){
        console.log('index found');
        wsList.splice(index, 1);
        players.splice(index, 1);
        if(index == 0){
            wsList.forEach( ws => ws.send('HOST_DISCONNECTED'));
        }else{
            wsList.forEach( ws => ws.send(['PLAYER_LIST',players.join(' ')].join(' ')) );
        }
    }
}

export function handleGameStartRequest() {
    wsList.forEach( playerSocket => playerSocket.send('GAME_START') );
}