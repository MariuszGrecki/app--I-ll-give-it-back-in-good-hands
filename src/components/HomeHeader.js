import React, {useState} from 'react';
import {
    BrowserRouter,
    Route,
    NavLink,
} from 'react-router-dom';

const HomeHeader = () => {

    let [message, setMessage] = useState(localStorage.getItem('myValueInLocalStorage') || '')

    return (
        <div className="home" id="start">
            <div className="home__background"></div>
            <div className="home__body">
                <h1 className="home__title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="home__background2"></div>
                <div className="home__buttons">
                    {message === '' &&
                    <div className="home__button">
                        <NavLink to="/Login" exact>ODDAJ <br/> RZECZY</NavLink></div>}
                    {message &&
                    (<div className="home__button">
                        <NavLink to="/GiveTheBag" exact>ODDAJ <br/> RZECZY</NavLink></div>)}
                    <div className="home__button"><NavLink to="/Login" exact>ZORGANIZUJ <br/> ZBIÓRKĘ</NavLink></div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;