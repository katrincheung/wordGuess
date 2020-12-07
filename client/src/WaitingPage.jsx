import React from 'react';
import { socket } from "./App";


function WaitingPage({ isHost }) {

    const StartButton = ({ isHost }) => {
        console.log(isHost.toString())
        if(isHost) {
            return <button type="button" onClick={() => socket.send('GAME_START')}>button</button>
        }else {
            return  <h2>You are Guest</h2>
        }
    }

    return (
        <div>
            <h1>Waiting Page</h1>
            <StartButton isHost={isHost}/>
        </div>
    );
}

export default WaitingPage;