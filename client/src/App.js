import './App.css';
import Main from './Main';
import MyLinkLink from './components/MyLink';
import React from 'react';
import MyLink from "./components/MyLink";



function App() {
  return (
      <div className="App">
        <Main />
        <div className="center">
            <MyLink link={"/"}>Main</MyLink>
            <MyLink link={"/Login"}>Login Page</MyLink>
        </div>
      </div>
  );
}



export default App;
