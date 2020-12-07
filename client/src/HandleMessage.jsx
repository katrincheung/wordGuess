import React, {useEffect, useState} from 'react';
import WaitingPage from "./WaitingPage";
import Login from "./Login";

const HandleMessage = ({ messageQueue }) => {
    const [ direct, setDirect ] = useState('Login');
    const command = messageQueue.split(' ')[0];
    const [ isHost, setIsHost ] = useState(false);

    const Page = ({ to }) => {
        switch(to) {
            case 'Login':
                return <Login/>
            case 'WaitingPage':
                return <WaitingPage isHost={isHost} />
            default:
                return <h2>default</h2>
        }
    }

    useEffect(() => {
        switch(command){
            case 'HOST_PLAYER':
                setIsHost(true);
                console.log('set isHost=true');
                break;
            case 'GUEST_PLAYER':
                console.log('set isHost=false');
                break;
            case 'PLAYER_LIST':
                setDirect('WaitingPage');
                break;
            default:
                console.log(`${messageQueue}`);
                break;}
        },[command]);

    return (
        <div>
            <h3>direct to {direct}</h3>
            <Page to={direct}/>
        </div>
    );


    }

export default HandleMessage;