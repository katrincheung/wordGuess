import React, {useEffect, useState} from 'react';
import WaitingPage from "./WaitingPage";
import Login from "./Login";
import Game from "./Game";

const HandleMessage = ({ messageQueue }) => {

    const [ direct, setDirect ] = useState('Login');
    const [ isHost, setIsHost ] = useState(false);
    const [ nameList, setNameList ] = useState([]);
    const [ roomCode, setRoomCode ] = useState('');
    const [ word, setWord ] = useState('');
    const [ hintList, setHintList ] = useState([])
    const [ isGuess, setIsGuess ] = useState(false);

    const Page = ({ to }) => {
        switch(to) {
            case 'Login':
                return <Login/>
            case 'WaitingPage':
                return <WaitingPage isHost={isHost} nameList={nameList} code={roomCode}/>
            case 'Game':
                return <Game word={word} isGuess={isGuess} code={roomCode} hintList={hintList}/>
            default:
                return <h2>default</h2>
        }
    }

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
                console.log(messageQueue.slice(1));
                break;
            default:
                console.log(`${messageQueue}`);
                break;}
        },[messageQueue, setIsHost, setNameList, setDirect, setRoomCode, setWord, setIsGuess, setHintList],);

    return (
        <div>
            {/*<h3>direct to {direct}</h3>*/}
            <Page to={direct}/>
        </div>
    );


    }

export default HandleMessage;