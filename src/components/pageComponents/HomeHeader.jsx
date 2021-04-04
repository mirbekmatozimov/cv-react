import React from "react";
import Button from "../Button";

export default ()=>{
    return (
        <div className="container">
            <div className="header-body">
                <div className="header-body__info wow animate__animated animate__fadeIn" data-wow-duration="1s">
                <h1 className="header-body__title">
                    Hi, I’m Mirb and I love creating Web apps
                </h1>
                <p className="header-body__text">
                    Creating web applications is my passion. Full ofs boundless energy
                    and enthusiasm, I’m over-inspired and follow my desires wherever
                    they take me! Checkout my works
                </p>
                <Button 
                    name="My portfolio"
                    link="#"
                    addClass="header-body__btn"
                />
                </div>
                <div className="header-body__img wow animate__animated animate__slideInRight" data-wow-duration="0.5s">
                <img src="img/header-body__img.svg" alt="web developing" />
                </div>
            </div>
        </div>
    );
}