import React, {useState} from "react";
import AppLogin from "./components/AppLogin";
import "./scss/main.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ErrorPage from "./components/ErrorPage";
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';
import LogOut from "./components/LogOut";

const App = () => {
    let [message, setMessage] = useState(localStorage.getItem('myValueInLocalStorage') || '')


    if (message === "") {
        return (
            <BrowserRouter>
                <div className="app">
                    <nav>
                        <div className="nav">
                            <li className="nav__li">{message}</li>
                            <li className="nav__li"><NavLink to="/Login" exact>Zaloguj </NavLink></li>
                            <li className="nav__li"><NavLink to="/Registration">Załóż konto </NavLink></li>
                        </div>
                    </nav>
                    <section className="section">
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/app--I-ll-give-it-back-in-good-hands" component={Home}/>
                            <Route path="/Login" component={Login}/>
                            <Route path="/Registration" component={Registration}/>
                            <Route path="/wylogowano" component={LogOut}/>
                            <Route component={ErrorPage}/>
                        </Switch>
                    </section>
                </div>
            </BrowserRouter>
        )
    } else {
        return (
            <>
                <AppLogin/>
            </>
        )
    }
}

export default App;
