export default function handleMessage(messageQueue) {
    const command = messageQueue[0];
    switch(command){
        case 'HOST_PLAYER':
            console.log('Need to handle host login page');
            break;
        case 'GUEST_PLAYER':
            console.log('Need to handle guest login page');
            break;
        case 'PLAYER_LIST':
            console.log('Need to handle player waiting page');
            console.log(`${messageQueue}`);
            break;
    }
}