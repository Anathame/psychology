import React from 'react';
import {Box, Stack} from "@mui/material";
import Logo from "./Logo";
import "./header.css"

// Header is the header that appears at the top of the screen with 'Customer Knowledge Graph' and the logo,
const Header = () => {
    return <>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <div className={"header-container"}>
                <Logo></Logo>
                <div className={"text-div"}>
                        <span className={"header-text"}>Multiple Resource Model Test</span>
                </div>
            </div>
        </Box>
    </>


};


export default Header;