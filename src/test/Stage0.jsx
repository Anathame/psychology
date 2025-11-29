import React from 'react';
import {Box, Button} from "@mui/material";
import "./styles.css"


function Stage0({advanceStage}) {


    const onClick = () => {
        advanceStage();
    };



    return <div className={"stage0box"}>
        <div>
            <p>This is a website designed to test the multiple resource model</p>
            <p>There will be four stages: a benchmarking stage, double visual, double audio, and audio and visual test</p>
            <Button variant="contained" onClick={onClick} color={"success"}>Continue</Button>
        </div>
    </div>

}

export default Stage0;