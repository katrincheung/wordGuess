import React, { useState } from 'react';
import MyInput from "./components/common/MyInput";
import { socket } from './App'

function Game() {

    const [ word, setWord ] = useState("");

    const handleSubmit = () => {
        socket.send(`WORD_INPUT ${word}`);
    }

    return(
        <div>
            <h2>This is in game</h2>
            <h3>word</h3>
            <MyInput value={ word} onClick={ e => setWord(e.target.value) }>Input</MyInput>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Game;