import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import icon1 from "../../src/assets/Icon-1.svg"
import icon2 from "../../src/assets/Icon-2.svg"
import icon3 from "../../src/assets/Icon-3.svg"
import icon4 from "../../src/assets/Icon-4.svg"

const AboutWhat = () => {

    let [message, setMessage] = useState(localStorage.getItem('myValueInLocalStorage') || '')

    return (
        <div className="about" id="threeColumns">
            <h1 className="home__title">Wystarczą 4 proste kroki</h1>
            <div className="home__background2"></div>
            <div className="about__body">
                <div className="about__padding">
                <div className="about__inside">
                    <img src={icon1}/>
                    <h1 className="about__title">Wybierz rzeczy</h1>
                    <h2>______</h2>
                    <h3 className="about__text">ubrania, zabawki, sprzęt i inne</h3>
                </div>
                <div className="about__inside">
                    <img src={icon2}/>
                    <h1 className="about__title">Spakuj je</h1>
                    <h2>______</h2>
                    <h3 className="about__text">skorzystaj z worków na śmieci</h3>
                </div>
                <div className="about__inside">
                    <img src={icon3}/>
                    <h1 className="about__title">Zdecyduj komu chcesz pomóc</h1>
                    <h2>______</h2>
                    <h3 className="about__text">wybierz zaufane miejsce</h3>
                </div>
                <div className="about__inside">
                    <img src={icon4}/>
                    <h1 className="about__title">Zamów kuriera</h1>
                    <h2>______</h2>
                    <h3 className="about__text">kurier przyjedzie w dogodnym terminie</h3>
                </div>
                </div>
            </div>
            {message === '' &&
            <div className="home__button">
                <NavLink to="/Login" exact>ODDAJ <br/> RZECZY</NavLink></div>}
            {message &&
            (<div className="home__button">
                <NavLink to="/GiveTheBag" exact>ODDAJ <br/> RZECZY</NavLink></div>)}
        </div>
    );
};

export default AboutWhat;