import React from 'react';

const HomeThreeColumns = () => {
    return (
        <div className="three" >
            <div className="three__columns">
                <h1 className="three__number">10</h1>
                <h2 className="three__title">ODDANYCH WORKÓW</h2>
                <h3 className="three__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim eum molestiae odio placeat quibusdam, sit voluptas voluptate!</h3>
            </div>
            <div className="three__columns">
                <h1 className="three__number">5</h1>
                <h2 className="three__title">WSPARTYCH ORGANIZACJI</h2>
                <h3 className="three__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim eum molestiae odio placeat quibusdam, sit voluptas voluptate!</h3>
            </div>
            <div className="three__columns">
                <h1 className="three__number">7</h1>
                <h2 className="three__title">ZORGANIZOWANYCH ZBIÓREK</h2>
                <h3 className="three__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim eum molestiae odio placeat quibusdam, sit voluptas voluptate!</h3>
            </div>
        </div>
    );
};

export default HomeThreeColumns;