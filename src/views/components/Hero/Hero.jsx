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
                        <h1>Um amigo a mais</h1>
                        <h2>Milhares de vezes mais diversão!</h2>
                        <p>
                            Ter um animal de estimação significa ter mais alegria, um novo amigo, uma 
                            pessoa feliz que estará
                            sempre com você para se divertir.
                        </p>
                        <div className="buttons-group">
                            {/* <a className="btn-secondary" href="#">Ver Intro</a> */}
                            <a className="btn-primary" href="#doguinhos">Procurar cachorro!</a>
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