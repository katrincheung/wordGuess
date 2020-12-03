import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Login from "./Login";

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/Login' component={Login}></Route>
        </Switch>

    );
}

export default Main;