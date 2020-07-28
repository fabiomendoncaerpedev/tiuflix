import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css';
//import ButtonLink from '../ButtonLink/index';
import Button from '../../components/Button';


function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo do TiuFlix"></img>
            </a>
            <Button className="ButtonLink" href="/">Novíssimo vídeo</Button>
        </nav>
    )
}

export default Menu;