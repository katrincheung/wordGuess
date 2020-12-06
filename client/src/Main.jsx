import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from "./Login";
import Game from "./Game";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/Login' component={Login}></Route>
            <Route exact path='/Game' component={Game}></Route>
        </Switch>

    );
}

export default Main;