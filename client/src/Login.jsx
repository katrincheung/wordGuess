import React, {useState} from "react";
import MyInput from './components/common/MyInput'

function Login(handleSubmit) {

    const [ name, setName ] = useState("");
    const [ code, setCode ] = useState("");


    return (
        <div>
            <div>
                <h1>Login Form</h1>
                <div>
                    <MyInput value={name} onKeyUp={e => setName(e.target.value)}>Name</MyInput>
                    <MyInput value={code} onKeyUp={e => setCode(e.target.value)}>Room Code</MyInput>
                    <button type="button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
