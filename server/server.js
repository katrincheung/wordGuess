import handleMessage from './HandleMessage.js';
import WebSocket from "ws";
import { handleDisconnection } from './LoginFunction.js';

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {

    ws.on('message', (message) => {
        let messageQueue = message.split(' ');
        console.log(messageQueue);
        handleMessage(ws, messageQueue);
    })

    ws.on('close', () => handleDisconnection());

    ws.send('Server connected')

})
