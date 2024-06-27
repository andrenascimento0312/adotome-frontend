import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import './Header.sass';

import menuIcon from '../../../images/hamburger.png';
import closeMenuIcon from '../../../images/close.png';
import logo2 from '../../../images/logo2.png';

const Header = ({ className }) => {

    const [menuMobile, setMenuMobile] = useState(false)
    const location = useLocation();
    // Verifica se a rota atual é a do SingleDog, não sabia disso...
    const isSingleDogRoute = location.pathname.includes('/doguinho/');

    return (
        <>
            <div className={`header-flex container ${isSingleDogRoute ? 'transparent-header' : ''}`}>
                <div className="header-left">
                    <Link className="item" to="/">
                        <img src={logo2} alt="" width="115" srcset="" />
                    </Link>

                    <Link className="item" to="/">
                        Home
                    </Link>

                    <Link className="item" to="/#doguinhos">
                        Cachorrinhos
                    </Link>

                </div>

                {/* <div className="header-right">
                    <a className="btn-primary" href="#">Junte-se a nós!</a>
                </div> */}
            </div>

            <div className="header-flex-mobile">
                <div className="item">
                    <img src={logo2} alt="" width="115" srcset="" />
                </div>
                <img onClick={() => setMenuMobile(!menuMobile)} className="menu-icon" src={menuMobile ? closeMenuIcon : menuIcon} alt="" width="25" srcSet='' />
            </div>


            {menuMobile && (
                <div className={`header-dropdown ${menuMobile ? 'active' : 'inactive'}`}>
                    <Link onClick={() => setMenuMobile(false)} className="item" to="/">Home</Link>
                    <Link onClick={() => setMenuMobile(false)} className="item" to="/#doguinhos">Cachorrinhos</Link>
                    {/* <Link onClick={() => setMenuMobile(false)} className="item">Sobre</Link> */}
                    {/* <a onClick={() => setMenuMobile(false)} className="btn-primary" href="#">Junte-se a nós!</a> */}
                </div>
            )}



        </>
    )
}

export default Header;