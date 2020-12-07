export default function handleMessage(messageQueue) {
    if (messageQueue.length != 0){
        let command = messageQueue[0];
        switch(command){
            case 'NAME_INPUT':
                let name = messageQueue[1];
                let code = messageQueue[2];
                console.log(`name = ${name}`);
                console.log(`code = ${code}`);
                break;
            case 'WORD_INPUT':
                let word = messageQueue[1];
                console.log(`inputWord = ${word}`);
                break;
            default:
                console.log(`unknownInput = ${messageQueue}`);
        }
    }
}