import React from 'react';
import { socket } from './App'

const Result = ({ ans, guessWord, code}) =>{

    const handleOnclick = () => {
        socket.send(`GAME_START ${code}`);
    }

    return(
        <div>
            <h4>The answer is {ans}</h4>
            <h4>The player guess is {guessWord}</h4>
            <button type='button' onClick={handleOnclick}>Restart</button>
        </div>
    )
}

export default Result;