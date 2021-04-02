import React from "react";

export default props=>{
    return (
        <div className={`${props.addClass} btn`}>
            <a href={props.link}>{props.name}</a>
        </div>
    );
}