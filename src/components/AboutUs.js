import React from 'react';
import people from "../../src/assets/People.jpg"
import signature from "../../src/assets/Signature.svg"

const AboutUs = () => {
    return (
        <div className="us" id="aboutUs">
            <div className="us__body">
                <div className="us__inside">
                <h1 className="home__title">O nas</h1>
                <div className="home__background2"></div>
                <p className="us__text">Nori grape silver beet broccoli kombu beet greens
                    fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip
                    leek lentil turnip greens parsnip.</p>
                    <div className="signature">
                <img  src={signature}/>
                </div>
            </div>
            </div>
            <img className="us__photo" src={people}/>


        </div>
    );
};

export default AboutUs;