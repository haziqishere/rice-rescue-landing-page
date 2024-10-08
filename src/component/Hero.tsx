import React from 'react';

type Props = {}

const Hero = (props: Props) => {
    return(
        <header className="header">
        <div className="header__logo-box">
            <img src="/img/logo-white.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Rice Rescue</span>
                <span className="heading-primary--sub">from seed to harvest</span>
            </h1>
        </div>
    </header>
    );
};

export default Hero;