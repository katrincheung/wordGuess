import handleMessage from './HandleMessage';

const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 8080 });

const messageQueue = [];


server.on('connection', (ws) => {

    ws.on('message', (message) => {
        if(`${message}` != 'Message is finished!!!')
            messageQueue.push(`${message}`);
        else{
            handleMessage(messageQueue);
            ws.send('whole message received');
        }
    })

    ws.send('Server connected')

})


// server.clients.forEach(function each(client) {
//     if (client.readyState == WebSocket.OPEN) {
//         client.send("server message");
//     }
// })
