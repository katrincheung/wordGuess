import React, { useState } from 'react';
import MyInput from "./components/common/MyInput";
import { socket } from './App'

function Game({ word, isGuess, code, hintList }) {

    const [ hintInput, setHintInput ] = useState('');
    const [ submitted, setSubmitted ] = useState(false);

    const handleHintSubmit = () => {
        socket.send(`HINT_INPUT ${hintInput} ${code}`);
        setSubmitted(true);
    }
    const handleGuessSubmit = () => {
        socket.send(`GUESS_INPUT ${hintInput} ${code}`);
        setSubmitted(true);
    }
    const HintButton = ({ isGuess, submitted, onClick }) => {
        if(!submitted && !isGuess){
            return (
                <div>
                    <MyInput value={hintInput} onClick={ e => setHintInput(e.target.value) }>Input</MyInput>
                    <button type="button" onClick={onClick}>Submit</button>
                </div>
            )
        }
        else if (submitted){
            return <h4>Submitted</h4>
        }else {
            return <h4>PLease wait</h4>
        }
    }
    const GameArea = ({ hintList, isGuess, submitted }) =>{
        if(hintList.length === 0){
            return <HintButton isGuess={isGuess} submitted={submitted} onClick={handleHintSubmit}/>
        }
        if(hintList.length !== 0){
            return <HintButton isGuess={!isGuess} submitted={submitted} onClick={handleGuessSubmit}/>
        }
    }

    return(
        <div>
            <h3>{(!isGuess)?`${word}`:`You are the guess player`}</h3>
            <GameArea hintList={hintList} isGuess={isGuess} submitted={submitted}/>
            <h4>{(hintList.length !== 0)?'Here are the hints':''}</h4>
            {
                hintList.map((hint,key) => <li key={key}>{hint}</li>)
            }
        </div>
    );
}

export default Game;