import './App.css';
import Main from './Main';
import React from 'react';
import MyLink from "./components/MyLink";
import handleMessage from "./HandleMessage";


export const socket = new WebSocket('ws://localhost:8080')

socket.onopen = () => { console.log("connected!") };
socket.onclose = () => { console.log("disconnected") };
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
    handleMessage(event.data.split(' '));

});


function App() {
    const handle = () => {
        console.log("button onclick");
        socket.send('Hello Server!');
    }
    return (
      <div className="App">
        <Main />
        <div className="center">
            <MyLink link={"/"}>Main</MyLink>
            <MyLink link={"/Login"}>Login Page</MyLink>
            <MyLink link={"/Game"}>Game Page</MyLink>
            <button onClick={handle}>debug</button>
        </div>
      </div>
    );
}



export default App;
