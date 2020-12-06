import pop from "./popFunction";

export default function handleMessage(messageQueue) {
    while (messageQueue.length != 0){
        let msg = pop(messageQueue);
        switch(msg){
            case 'NAME_INPUT':
                let name = pop(messageQueue);
                let code = pop(messageQueue);
                console.log(`name = ${name}`);
                console.log(`code = ${code}`);
                break;
            case 'WORD_INPUT':
                let word = pop(messageQueue);
                console.log(`inputWord = ${word}`);
                break;
            default:
                let unknown = pop(messageQueue);
                console.log(`unknownInput = ${unknown}`);
        }
    }
}