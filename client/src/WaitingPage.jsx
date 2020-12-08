import React from 'react';
import { socket } from "./App";


function WaitingPage({ isHost, nameList, code }) {
    console.log(`nameList = ${nameList}`);

    const StartButton = ({ isHost }) => {
        if(isHost) {
            return <button type="button" onClick={() => socket.send(`GAME_START ${code}`)}>button</button>
        }else {
            return  <h2>You are Guest</h2>
        }
    }

    return (
        <div>
            <h1>Waiting Page</h1>
            {
                nameList.map((name,key) => <li key={key}>{name}</li>)
            }
            <StartButton isHost={isHost}/>
        </div>
    );
}

export default WaitingPage;