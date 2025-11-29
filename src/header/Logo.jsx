import React from 'react';
import logo from "../images/logo.png";
import "../test/styles.css"


function Logo() {
    return (
            <img
                className={"imgsize"}
                src={logo}
                alt="iCustomer Logo"
                id={"Icon is loaded"}
                draggable={false}
            />
    );
}

export default Logo;