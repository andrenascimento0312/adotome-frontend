import React from "react";

import './Hero.sass';

import heroImage from "../../../images/heroImage.png"
import bgHero from "../../../images/bgHero.png"

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="container hero-content">
                    <div className="hero-left">
                        <h1>One More Friend</h1>
                        <h2>Thousands More Fun!</h2>
                        <p>
                            Having a pet means you have more joy, a new frind, a happy
                            person who will always be with you to have fun. We have 200+
                            different pets that can meet your needs!
                        </p>
                        <div className="buttons-group">
                            <a className="btn-secondary" href="#">Ver Intro</a>
                            <a className="btn-primary" href="#">Procurar cachorro!</a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={heroImage} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;