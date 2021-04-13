import React, {useState} from 'react';
import GiveTheBag from "./GiveTheBag";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import LogOut from "./LogOut";
import Panel from "./Panel";
import Admin from "./Admin";

const AppLogin = () => {
    let [message, setMessage] = useState(localStorage.getItem('myValueInLocalStorage') || '')

    const reload = () => {
        localStorage.setItem('myValueInLocalStorage', "");
        window.location.reload();
    }
    return (
        <BrowserRouter>
            <div className="app">
                <nav>
                    <div className="nav">
                        <li className="nav__li">{message}</li>
                        <li className="nav__li"><NavLink to="/GiveTheBag" exact>Oddaj rzeczy </NavLink></li>
                        <li className="nav__li"><NavLink to="/user" >User </NavLink></li>
                        <li className="nav__li"><NavLink to="/admin" >Admin </NavLink></li>
                        <li className="nav__li" onClick={reload}><NavLink to="/wylogowano">Wyloguj </NavLink></li>
                    </div>
                </nav>
                <section className="section">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/app--I-ll-give-it-back-in-good-hands"component={Home}/>
                        <Route path="/Login" component={Home}/>
                        <Route path="/Registration" component={Home}/>
                        <Route path="/GiveTheBag" component={GiveTheBag}/>
                        <Route path="/wylogowano" component={LogOut}/>
                        <Route path="/user" component={Panel}/>
                        <Route path="/admin" component={Admin}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </section>
            </div>
        </BrowserRouter>
    );
};

export default AppLogin;