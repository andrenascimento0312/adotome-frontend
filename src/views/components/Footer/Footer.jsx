import React from "react";
import { Link } from "react-router-dom";

import './Footer.sass';

import logo2 from '../../../images/logo2.png';

const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-up">
                        <div className="footer-left">
                            <Link className="item" to="/">
                                Home
                            </Link>

                            <Link className="item" to="#doguinhos">
                                Doguinhos
                            </Link>

                            {/* <div className="item">Sobre</div>
                            <div className="item">Contato</div> */}

                            <div className="footer-right"></div>
                        </div>
                    </div>
                    <div className="footer-down">
                        <div className="copy">@ 2024 Adote-me. Todos os direitos reservados</div>
                        <div className="logo">
                            <img src={logo2} width="115" alt="" srcset="" />
                        </div>
                        {/* <div className="links">
                            <div className="item">Política de privacidade</div>
                            <div className="item">Política de privacidade</div>
                        </div> */}
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;