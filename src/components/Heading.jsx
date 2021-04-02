import React from "react";

export default props => {
    return (
        <div className={`${props.sectionName}__heading`}>
            <h2 className={`${props.sectionName}__title`}>{props.title}</h2>
            <p className={`${props.sectionName}__text`}>{props.text}</p>
        </div>
    );
}