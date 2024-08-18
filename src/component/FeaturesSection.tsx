import React from 'react';
import Image from 'next/image';

type Props = {}

const FeaturesSection = (props: Props) => {
    return(
        <section className="section-features">
                    <div className="row">
                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-world"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Hyperlocalizaion Mapping</h3>
                                <p className="feature-box__text">
                                    Using Google Maps API integraion. Helps farmers by pin pointing IoT devices in different fields
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-compass"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Drone Automaion</h3>
                                <p className="feature-box__text">
                                    Custom fligh pahts via Google Maps. One-click deploy for automated pesticide spray
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <Image 
                                    src='/img/ai_icon.png' 
                                    alt='AI Icon'
                                    height={200}
                                    width={200} 
                                />
                                <i className="feature-box__icon icon-basic-map"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">Smart Pest Detection</h3>
                                <p className="feature-box__text">
                                    Detects pest sounds for early intervenion. Audio classifier AI Model will be run continuosly on-site
                                </p>
                            </div>
                        </div>

                        <div className="col-1-of-4">
                            <div className="feature-box">
                                <i className="feature-box__icon icon-basic-heart"></i>
                                <h3 className="heading-tertiary u-margin-bottom-small">AI Plant Healh Analysis</h3>
                                <p className="feature-box__text">
                                    Provide insights on nurient levels & disease detection
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default FeaturesSection;