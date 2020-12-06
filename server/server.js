const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8080 });

const messageQueue = [];

function pop(array) {
    let msg = array[0];
    array.shift();
    return msg;
}

function action() {
    while (messageQueue.length != 0){
        let msg = pop(messageQueue);
        if(msg == 'name'){
            let name = pop(messageQueue);
            let code = pop(messageQueue);
            console.log(`name = ${name}`);
            console.log(`code = ${code}`);
        }
        else{
            console.log(pop(messageQueue));
        }
    }
}


server.on('connection', (ws) => {

    ws.on('message', (message) => {
        if(`${message}` != 'Message is finished!!!')
            messageQueue.push(`${message}`);
        else{
            action();
            ws.send('name code received');
        }
    })

    ws.send('Server connected')

})


// server.clients.forEach(function each(client) {
//     if (client.readyState == WebSocket.OPEN) {
//         client.send("server message");
//     }
// })
