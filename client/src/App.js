import './App.css';
import Main from "./Main";
import {Link} from "react-router-dom";
import React from "react";



function App() {
  return (
      <div className="App">
        <Main />
        <div className="center">
          <Link to="/">
            <button variant="outlined">Main</button>
          </Link>
          <Link to="/Login">
            <button variant="outlined">Login</button>
          </Link>
        </div>
      </div>
  );
}



export default App;
