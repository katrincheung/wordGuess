import './App.css';
import React, {useEffect, useState} from 'react';
import HandleMessage from "./HandleMessage";


export const socket = new WebSocket(process.env.REACT_APP_WS_URI);

function App() {

    const [ messageQueue, setMessageQueue ] = useState('');

    useEffect(() => {
        socket.onopen = () => console.log("connected!");
        socket.onclose = () => console.log("disconnected");
        socket.onmessage = e => setMessageQueue(e.data);
    }, []);

    return (
      <div className="App">
        <div className="center">
            <HandleMessage messageQueue={messageQueue.split(' ')}/>
        </div>
      </div>
    );
}



export default App;
