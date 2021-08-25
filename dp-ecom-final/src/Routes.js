import React, { useState } from 'react'
import { Web3Context } from './Context/Web3Context'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';

export default function Routes() {
    const [web3Context, setWeb3Context] = useState({})
    return(
        <BrowserRouter>
        <Switch>
            <Web3Context.Provider value={{web3Context, setWeb3Context}}>
                <Route exact path = "/" component = {Home}/>
            </Web3Context.Provider>
        </Switch>
        </BrowserRouter>
    )
}