import React from "react";

export default props => {
    return (
        <div className={`${props.sectionName}__heading ${props.addClass}`} data-wow-duration={props.dataWowDuration}>
            <h2 className={`${props.sectionName}__title`}>{props.title}</h2>
            <p className={`${props.sectionName}__text`}>{props.text}</p>
        </div>
    );
}