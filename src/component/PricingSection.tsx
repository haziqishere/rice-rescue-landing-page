import React from "react";

type Props = {}

const PricingSection = (props: Props) => {
    return (
        <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Add-Ons Hardware Pricing
                        </h2>
                    </div> 
                    <div className="row">
                        <div className="col-1-of-3">
                            <div className="card">
                                <div className="card__side card__side--front card__side--front-1">
                                    <div className="card__picture card__picture--1">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            Pest Detector Sensor with AI Integraion 
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>Paxx</li>
                                            <li>Up to 30 people</li>
                                            <li>2 tour guides</li>
                                            <li>Sleep in cozy hotels</li>
                                            <li>Difficulty: easy</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$76.73</p>
                                            <p className="card_price_value">/unit</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Buy now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1-of-3">
                        <div className="card">
                                <div className="card__side card__side--front card__side--front-2">
                                    <div className="card__picture card__picture--2">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--2">
                                            Soil Temperature & Humidty Sensor  
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>7 day tours</li>
                                            <li>Up to 40 people</li>
                                            <li>6 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: medium</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-2">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$11.26</p>
                                            <p className="card_price_value">/unit</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Buy now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1-of-3">
                        <div className="card">
                                <div className="card__side card__side--front card__side--front-3">
                                    <div className="card__picture card__picture--3">
                                        &nbsp;
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--3">
                                            Autonomous Drone
                                        </span>
                                    </h4>
                                    <div className="card__details">
                                        <ul>
                                            <li>5 day tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: hard</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-3">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">Only</p>
                                            <p className="card__price-value">$300</p>
                                            <p className="card_price_value">/unit</p>
                                        </div>
                                        <a href="#" className="btn btn--white">Buy now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="u-center-text u-margin-top-huge">
                            <a href="#" className="btn btn--green">More Info</a>
                    </div>    
                </section>
    );
}

export default PricingSection