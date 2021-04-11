import React from 'react';
import {NavLink} from "react-router-dom";

const LogOut = () => {
    return (
        <div className="logOut">
            <div className="logOut__main">
                <h1 className="home__title">Wylogowano nastąpiło <br/> pomyślnie wariacie!</h1>
                <div className="home__background2"></div>
                <div className="login__button">
                    <NavLink to="/">Strona główna</NavLink>
                </div>
            </div>
        </div>
    );
};

export default LogOut;