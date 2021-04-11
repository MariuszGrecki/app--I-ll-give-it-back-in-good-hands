import React from 'react';
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import AboutUs from "./AboutUs";
import Foundation from "./Foundation";
import Contact from "./Contact";
import {Link} from "react-scroll";
import AboutWhat from "./AboutWhat";

const Home = () => {
    return (
        <div>
            <div className="nav__home">
                <Link
                    className="home__link"
                    to="start"
                    smooth={true}
                    duration={1000}
                >
                    Start
                </Link>
                <Link
                    className="home__link"
                    to="threeColumns"
                    smooth={true}
                    duration={1000}
                >
                    O co chodzi?
                </Link>
                <Link
                    className="home__link"
                    to="aboutUs"
                    smooth={true}
                    duration={1000}
                >
                    O nas
                </Link>
                <Link
                    className="home__link"
                    to="foundation"
                    smooth={true}
                    duration={1000}
                >
                    Fundacje i organizacje
                </Link>
                <Link
                    className="home__link"
                    to="contact"
                    smooth={true}
                    duration={1000}
                >
                    Kontakt
                </Link>
            </div>
            <div>
                <HomeHeader/>
                <HomeThreeColumns/>
                <AboutWhat />
                <AboutUs/>
                <Foundation/>
                <Contact/>
            </div>
        </div>
    )
        ;
};

export default Home;