import React, {useState} from 'react';
import {Data} from './Data';

const Foundation = () => {
    const [current, setCurrent] = useState(0)

    const first = () => {
        setCurrent(0)
    }
    const second = () => {
        setCurrent(1)
    }
    const third = () => {
        setCurrent(2)
    }
    const four = () => {
        setCurrent(3)
    }
    const fifth = () => {
        setCurrent(4)
    }
    const sixth = () => {
        setCurrent(5)
    }

    return (
        <div className="foundation">
            <h1 className="home__title">Komu pomagamy?</h1>
            <div className="home__background2"></div>
            <div>
                <div className="foundation__buttons">
                    <p className="foundation__button" onClick={first}>Fundacjom</p>
                    <p className="foundation__button" onClick={second}>Organizacjom <br/>pozarządowym</p>
                    <p className="foundation__button" onClick={third}>lokalnym <br/>zbiórkom</p>
                </div>
                {Data.map((el, index) => {
                    return (
                        <div className="foundation__body" key={index}>
                            {index === current && (
                                <>
                                    <div className="foundation__title">{el.title}</div>
                                    <div className="foundation__txt">
                                        <div className="foundation__text">
                                            <div className="foundation__company">{el.text1}</div>
                                            <div className="foundation__company2">{el.text2}</div>
                                        </div>
                                        <div className="foundation__company2">{el.text3}</div>
                                    </div>
                                    <div className="foundation__txt">
                                        <div className="foundation__text">
                                            <div className="foundation__company">{el.text1}</div>
                                            <div className="foundation__company2">{el.text2}</div>
                                        </div>
                                        <div className="foundation__company2">{el.text3}</div>
                                    </div>
                                    <div className="foundation__txt">
                                        <div className="foundation__text">
                                            <div className="foundation__company">{el.text1}</div>
                                            <div className="foundation__company2">{el.text2}</div>
                                        </div>
                                        <div className="foundation__company2">{el.text3}</div>
                                    </div>
                                </>
                            )}

                        </div>
                    )
                })}
                {(current === 0 || current === 3 || current === 4) && (
                    <div className="foundation__bottom">
                        <div className="foundation__mini" onClick={first}>1</div>
                        <div className="foundation__mini" onClick={four}>2</div>
                        <div className="foundation__mini" onClick={fifth}>3</div>
                    </div>
                )}
                {(current === 1 || current === 5) && (
                    <div className="foundation__bottom">
                        <div className="foundation__mini" onClick={second}>1</div>
                        <div className="foundation__mini" onClick={sixth}>2</div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Foundation;