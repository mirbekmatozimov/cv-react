import React from "react";

export default props => {
    return (
        <div className="works__card">
            <a href="#">
                <img src={props.image} alt="work 1" />
                <div className="black-overlay"></div>
                <div className="bottom-pop-up">{props.name}</div>
            </a>
        </div>
    );
}