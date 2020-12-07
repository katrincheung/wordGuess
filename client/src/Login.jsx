import React, { useState } from "react";
import MyInput from './components/common/MyInput'
import { socket } from './App'

function Login() {

    const [ name, setName ] = useState("");
    const [ code, setCode ] = useState("");

    const handleSubmit = () => {
        socket.send(`NAME_INPUT ${name} ${code}`);
        console.log("message sent");
    }


    return (
        <div>
            <div>
                <h1>Login Form</h1>
                <div>
                    <MyInput value={name} onClick={e => setName(e.target.value)}>Name</MyInput>
                    <MyInput value={code} onClick={e => setCode(e.target.value)}>Room Code</MyInput>
                    <button type="button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
