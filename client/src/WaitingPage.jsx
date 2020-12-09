import React from 'react';
import { socket } from "./App";


function WaitingPage({ isHost, nameList, code }) {
    console.log(`nameList = ${nameList}`);

    return (
        <div>
            <h1>Waiting Page</h1>
            <ul>
                {
                    nameList.map((name,key) => <li key={key}>{name}</li>)
                }
            </ul>
            {
                isHost
                ? <button type="button" onClick={() => socket.send(`GAME_START ${code}`)}>button</button>
                : <h2></h2>
            }
        </div>
    );
}

export default WaitingPage;