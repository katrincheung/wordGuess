import './App.css';
import Main from './Main';
import React from 'react';
import MyLink from "./components/MyLink";


const socket = new WebSocket('ws://localhost:8080')
socket.onopen = () => {
    console.log("connected!");
}
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});

function App() {
  return (
      <div className="App">
        <Main />
        <div className="center">
            <MyLink link={"/"}>Main</MyLink>
            <MyLink link={"/Login"}>Login Page</MyLink>
        </div>
      </div>
  );
}



export default App;
