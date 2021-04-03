import React from "react";

export default ()=>{
    return (
        <nav className="header-top__menu menu" id="my-menu">
            <a href="#root" className="mburger mburger--collapse mburger-close">
                <b></b>
                <b></b>
                <b></b>
            </a>
            <ul>
                <li><a href="#" className="Selected">Home</a></li><li><a href="#">About me</a></li><li><a href="#">My works</a></li><li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    );
}