import React, {useEffect, useState} from 'react';
import { Redirect } from "react-router-dom";

const HandleMessage = ({ messageQueue }) => {
    const [ direct, setDirect ] = useState('/Login');
    const command = messageQueue.split(' ')[0];

  useEffect(() => {
        switch(command){
            case 'HOST_PLAYER':
                console.log('Need to handle host login page');
                break;
            case 'GUEST_PLAYER':
                console.log('Need to handle guest login page');
                break;
            case 'PLAYER_LIST':
                setDirect('/WaitingPage');
                console.log(`${messageQueue} ${direct} Need to handle player waiting page`);
                break;
            default:
                console.log(`${messageQueue}`);
                break;}
        },[command]);

    return (
        <div>
            <Redirect to={direct}/>
        </div>
    );


}

export default HandleMessage;