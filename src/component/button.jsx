import React from "react";

const Button = (props) => {
    return (
        <button className="button"
        onClick={props.onclick}>{props.value}</button>
    );
};

export default Button;