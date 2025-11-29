import React from 'react';
import {Button} from "@mui/material";

function Stage1({advanceStage}) {

    const onClick = () => {
        advanceStage();
    };



    return <div className={"stage1box"}>
        <div>
            <p>First, benchmarks must be run on your reaction speed for visual and audio stimuli</p>
            <p>Visual reaction speed will be the first sense to be benchmarked</p>
            <Button variant="contained" onClick={onClick} color={"success"}>Continue</Button>
        </div>
    </div>

}



export default Stage1;