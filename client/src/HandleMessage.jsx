import React, {useEffect, useState} from 'react';
import WaitingPage from "./WaitingPage";
import Login from "./Login";
import Game from "./Game";

const HandleMessage = ({ messageQueue }) => {

    const [ direct, setDirect ] = useState('Login');
    const [ isHost, setIsHost ] = useState(false);
    const [ nameList, setNameList ] = useState([]);
    const [ roomCode, setRoomCode ] = useState('');

    const Page = ({ to }) => {
        switch(to) {
            case 'Login':
                return <Login/>
            case 'WaitingPage':
                return <WaitingPage isHost={isHost} nameList={nameList} code={roomCode}/>
            case 'Game':
                return <Game/>
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
            default:
                console.log(`${messageQueue}`);
                break;}
        },[messageQueue, setIsHost, setNameList, setDirect, setRoomCode],);

    return (
        <div>
            {/*<h3>direct to {direct}</h3>*/}
            <Page to={direct}/>
        </div>
    );


    }

export default HandleMessage;