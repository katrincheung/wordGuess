import './App.css';
import Main from './Main';
import React, {useEffect, useState} from 'react';
import MyLink from "./components/MyLink";
import HandleMessage from "./HandleMessage";

export const socket = new WebSocket('ws://localhost:8080')

function App() {

    const [ messageQueue, setMessageQueue ] = useState('');

    useEffect(() => {
        socket.onopen = () =>  console.log("connected!");
        socket.onclose = () => console.log("disconnected");
        socket.onmessage = e => setMessageQueue(e.data);
    },[]);

    return (
      <div className="App">
        <Main />
        <div className="center">
            <HandleMessage messageQueue={messageQueue}/>
            <h2>{messageQueue}</h2>
            <MyLink link={"/"}>Main</MyLink>
            <MyLink link={"/Login"}>Login Page</MyLink>
            <MyLink link={"/WaitingPage"}>Waiting Page</MyLink>
            <MyLink link={"/Game"}>Game Page</MyLink>
        </div>
      </div>
    );
}



export default App;
