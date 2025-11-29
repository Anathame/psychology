import React, {useEffect} from 'react';
import {Box, Button} from "@mui/material";
import "./styles.css"


function Results({advanceStage, benchmarkAudio, benchmarkVisual, averageVisual, averageAudio, doubleVisual,doubleAudio,audioAndVisual}) {



    useEffect(() => {
        console.log(benchmarkAudio);
        console.log(benchmarkVisual);
        console.log(averageVisual);
        console.log(averageAudio);
        console.log(doubleVisual);
        console.log(doubleAudio);
        console.log(audioAndVisual);
    },[]);

    const onClick = () => {
        navigator.clipboard.writeText(JSON.stringify({"Benchmark Audio Times": benchmarkAudio, "Benchmark Visual Times": benchmarkVisual, "Average Visual Response Time": averageVisual, "Average Audio Response Time": averageAudio, "Double Visual Data": doubleVisual, "Double Audio Data": doubleAudio, "Audio and Visual Data": audioAndVisual}));

    };



    return <div className={"stage0box"}>
        <div>
            <p>The test is complete</p>
            <p>Your average visual reaction speed is: {averageVisual}ms</p>
            <p>Your average audio reaction speed is: {averageAudio}ms</p>
            <p>I am too lazy to display the rest. Send me the below json in teams</p>
            <Button variant="contained" onClick={onClick}>Copy to clipboard</Button>
        </div>
    </div>

}

export default Results;