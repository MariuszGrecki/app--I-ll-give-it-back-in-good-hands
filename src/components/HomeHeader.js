import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className="home" id="start">
            <div className="home__background"></div>
            <div className="home__body">
                <h1 className="home__title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className="home__background2"></div>
                <div className="home__buttons">
                    <div className="home__button"><NavLink to="/Login" exact>Oddaj <br/> rzeczy</NavLink></div>
                    <div className="home__button"><NavLink to="/Login" exact>Zorganizuj <br/> zbiórkę</NavLink></div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;