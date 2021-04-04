import React from "react";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default (props)=>{
    return (
        <nav className="header-top__menu menu" id="my-menu">
            <a href="#root" className="mburger mburger--collapse mburger-close">
                <b></b>
                <b></b>
                <b></b>
            </a>
            
            <ul>
                <li><Link to="/" className="Selected">Home</Link></li><li><Link to="/about">About me</Link></li><li><HashLink smooth to="/#works">Works</HashLink></li><li><HashLink smooth to="/#contacts">Contacts</HashLink></li>
            </ul>
        </nav>
    );
}