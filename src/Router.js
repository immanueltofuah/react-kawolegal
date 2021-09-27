import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Tabs/Home';
import Startup from './Tabs/Startup';
import Register from './Tabs/Register';
import Login from './Tabs/Login';

function Router(Props) {
    return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/startup" component={Startup} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    
    
    </BrowserRouter>
    );
}

export default Router;