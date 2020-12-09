import React, {useEffect, useState} from 'react';
import WaitingPage from "./WaitingPage";
import Login from "./Login";
import Game from "./Game";
import Result from "./Result";

const Page = ({ direct, isHost, isGuess, nameList, roomCode, word, hintList, result }) => {
    switch(direct) {
        case 'Login':
            return <Login/>
        case 'WaitingPage':
            return <WaitingPage isHost={isHost} nameList={nameList} code={roomCode}/>
        case 'Game':
            return <Game word={word} isGuess={isGuess} code={roomCode} hintList={hintList}/>
        case 'Result':
            return <Result ans={result[0]} guessWord={result[1]} code={roomCode}/>
        default:
            return <h2>default</h2>
    }
}

const HandleMessage = ({ messageQueue }) => {

    const [ direct, setDirect ] = useState('Login');
    const [ isHost, setIsHost ] = useState(false);
    const [ isGuess, setIsGuess ] = useState(false);
    const [ nameList, setNameList ] = useState([]);
    const [ roomCode, setRoomCode ] = useState('');
    const [ word, setWord ] = useState('');
    const [ hintList, setHintList ] = useState([])
    const [ result, setResult ] = useState([]);


    useEffect(() => {
        console.log(`whole message = ${messageQueue}`);
        const command = messageQueue[0];
        switch(command){
            case 'HOST_PLAYER':
                setIsHost(true);
                setRoomCode(messageQueue[1]);
                console.log('set isHost=true');
                break;
            case 'GUEST_PLAYER':
                setRoomCode(messageQueue[1]);
                console.log('set isHost=false');
                break;
            case 'PLAYER_LIST':
                setNameList(messageQueue.slice(1));
                console.log('setNameList called');
                setDirect('WaitingPage');
                console.log('setDirect called');
                break;
            case 'HOST_DISCONNECTED':
                setDirect('Login');
                setNameList([]);
                break;
            case 'GAME_START':
                setDirect('Game');
                break;
            case 'GUESS_PLAYER':
                setIsGuess(true);
                break;
            case 'WORD':
                setWord(messageQueue[1]);
                break;
            case 'HINT_LIST':
                setHintList(messageQueue.slice(1));
                break;
            case 'RESULT':
                setDirect('Result');
                setHintList([]);
                setIsGuess(false);
                setResult(messageQueue.slice(1))
                break;
            default:
                console.log(`${messageQueue}`);
                break;}
        },[messageQueue, setIsHost, setNameList, setDirect, setRoomCode, setWord, setIsGuess, setHintList],);

    return (
        <div>
            <Page
                direct={direct}
                isHost={isHost}
                isGuess={isGuess}
                nameList={nameList}
                roomCode={roomCode}
                word={word}
                hintList={hintList}
                result={result}
            />
        </div>
    );


    }

export default HandleMessage;