import React from "react";

type Props = {}

const AboutSection = (props: Props) => {
    return(
        <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-1-of-2">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                                You're going to fall in love with nature
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem, sunt quas expedita ipsam tempora non error iusto ipsum quasi! Eligendi magni officiis nemo doloremque modi voluptas libero mollitia ad.
                            </p>

                            <h3 className="heading-tertiary u-margin-bottom-small">
                                Live adventures like you never have before
                            </h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni enim, sequi maxime eligendi labore totam, natus suscipit et praesentium id accusamus.
                            </p>

                            <a href="#" className="btn-text">
                                Learn more &rarr;
                            </a>

                        </div>
                        <div className="col-1-of-2">
                            <div className="composition">
                                <img src="/img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                                <img src="/img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                                <img src="/img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                            </div>
                        </div>
                    </div>
                </section>
    );
}

export default AboutSection;