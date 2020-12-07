import handleMessage from './HandleMessage.js';
import WebSocket from "ws";

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {

    ws.on('message', (message) => {
        let messageQueue = message.split(' ');
        console.log(messageQueue);
        handleMessage(ws, messageQueue);
        // ws.send('Message received');
    })

    ws.send('Server connected')

})


// server.clients.forEach(function each(client) {
//     if (client.readyState == WebSocket.OPEN) {
//         client.send("server message");
//     }
// })
