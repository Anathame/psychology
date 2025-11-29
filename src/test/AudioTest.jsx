import React, {useRef, useEffect, useState} from 'react'
import {Button} from "@mui/material";
import "./styles.css"
import audioOne from "../audio/audioOne.mp3";

function AudioTest ({advanceStage, addAudioValue, audioReactionTime}) {
    const audioRef = useRef();
    const buttonRef = useRef(null);

    const onClick = () => {

        if (advanceToNextStage) {
            advanceStage();
        } else if(reactionState === "waiting"){
            ready();
            setButtonText("Testing...");
            setButtonColor("info");
        }


    };


    const [resultText, setResultText] = useState("");
    const [error, setError] = useState(0);
    const [reactionState, setReactionState] = useState("waiting");

    const [advanceToNextStage, setAdvanceToNextStage] = useState(false);

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [color, setColor] = useState(null);
    const [filled, setFilled] = useState(false);

    const [buttonText, setButtonText] = useState("READY");
    const [buttonColor, setButtonColor] = useState("error");

    const [iteration, setIteration] = useState(0);


    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const onReact = () => {

        if(reactionState === "invalid") {
            setError(error + 1);
        } else if (reactionState === "valid") {
            done();
        }



    };

    const done = () => {
        setReactionState("waiting");

        let postvaliderror = 0;
        let time = Date.now()-startTime;


        if(time > audioReactionTime+50) {
            postvaliderror++;
        }


        console.log("DONE!!!");
        console.log("error:"+(error+postvaliderror));
        let bob4 = endTime;
        let bob2 = startTime;
        console.log("reaction time: "+(Date.now()-startTime));
        // setFilled(true);
        // setColor("white");
        setButtonColor("error")
        setButtonText("READY");
        setIteration(iteration + 1);
        setResultText("Reaction time: "+(Date.now()-startTime)+"ms error: "+(error+postvaliderror));

        addAudioValue(time);

        if(iteration >=4) {
            setButtonColor("success");
            setButtonText("CONTINUE");
            setAdvanceToNextStage(true);
        }

        // setButtonDisabled(false);
    };

    const ready = () => {
        console.log("READY");
        setResultText("");
        // setFilled(true);
        // setColor("white");
        setReactionState("invalid");
        setTimeout(stim, getRandomArbitrary(300, 5000));

    };

    const stim = () => {
        console.log("STIMMING!!!");
        setStartTime(Date.now());
        setReactionState("valid");
        audioRef.current.play();
    };





    const keyPress = (e) => {

        if(e.key === "f") {
            onReact();
        }

    };

    const unfocus = () => {
        if(reactionState !== "waiting") {
            buttonRef.current.focus();
        }
    }




    return <div className={"stage2box"}>
        <div>
            <p>The audio stimuli test will run five times.</p>
            <p>A beep will be heard after some time, when you do, press F on the keyboard.</p>
            <p>Your mean reaction time for the stimuli will be used in future tests</p>
            <p>Pressing the READY button will run the test once.</p>



            <div>
                <div>
                    <div className={"buttonBox"}>
                        <div>
                            <Button ref={buttonRef} variant="contained" color={buttonColor} onClick={onClick} onKeyPress={keyPress} onBlur={unfocus}>{buttonText}</Button>
                        </div>
                    </div>

                    {/*<div>*/}
                    {/*    <p>{resultText !== null ?  resultText : ""}</p>*/}
                    {/*</div>*/}
                </div>

            </div>

        </div>
        <audio ref={audioRef} src={audioOne} />
    </div>







}




export default AudioTest;