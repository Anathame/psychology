import React, {useEffect, useRef} from 'react';
import {Button} from "@mui/material";
import VisualTest from "./VisualTest";
import "./styles.css"
import VisualTest2 from "./VisualTest2";
import AudioTest2 from "./AudioTest2";
import audioOne from "../audio/audioOne.mp3";
import audioTwo from "../audio/audioTwo.mp3";


function Stage4({advanceStage, addData, audioReactionTime, visualReactionTime}) {

    const buttonRef = useRef(null);

    const [thePressedKey, setPressedKey] = React.useState({});
    const [commence, setCommence] = React.useState(false);
    const [buttonText, setButtonText] = React.useState("READY");
    const [buttonColor, setButtonColor] = React.useState("error");
    const [readyToContinue, setReadyToContinue] = React.useState(false);
    const [theData, setTheData] = React.useState([]);
    const audioRef1 = useRef();
    const audioRef2 = useRef();

    const onClick = () => {
        if(commence === false) {
            setCommence(true);
            setButtonColor("info");
            setButtonText("Testing...");
        } else if(readyToContinue) {
            advanceStage();
        }
    };

    const submitTheData = (data) => {
        let temp = structuredClone(theData);
        temp.push(data);
        setTheData(temp);
    }

    useEffect(() => {
        if(theData.length >= 2) {
            setReadyToContinue(true);
            setButtonColor("success");
            setButtonText("CONTINUE");
            let bob = theData;
            console.log("both tests are complete");
            addData(theData);
        }

    },[theData]);

    const keyIsPressed = (key) => {

        let temp = structuredClone(thePressedKey);
        temp["key"] = key.key;
        // setPressedKey(key.key);
        setPressedKey(temp);

        console.log("stage2 key: "+key.key);
    };

    const audio1Click = () => {
        audioRef1.current.play();
    }



    const unfocus = () => {
        if(theData.length < 2) {
            buttonRef.current.focus();
        }
    }






    return <div className={"stage1box"}>
        <div>
            <p>This is the final stage. There will be one visual stimuli and one audio stimuli.</p>
            <p>It is the same as before, for one sound press F for the audio, press J for the visual stimuli.</p>
            <div>
                <Button variant="contained" onClick={audio1Click} color={"warning"}>(F) Sound</Button>
            </div>


            <p>Unlike before, the test will advance without user input. So after pressing f or j, the test will continue until each box has been reacted to 5 times.</p>
            <Button ref={buttonRef} variant="contained" onClick={onClick} color={buttonColor} onKeyPress={keyIsPressed} onBlur={unfocus}>{buttonText}</Button>
            <div className={"buttonBox"}>
                <div className={"bottomPadding"}>
                    <AudioTest2 audioReactionTime={audioReactionTime} name={"Audio Left"} submit={submitTheData}  advanceStage={advanceStage} keyPressed={thePressedKey} audioType={"audioOne"} commence={commence} targetKey={"f"}></AudioTest2>
                </div>

                <div className={"topPadding"}>
                    <VisualTest2 visualReactionTime={visualReactionTime} name={"Visual Box"} submit={submitTheData} advanceStage={advanceStage} keyPressed={thePressedKey} commence={commence} targetKey={"j"} reactionColor={"red"}></VisualTest2>
                </div>

            </div>
        </div>
        <audio ref={audioRef1} src={audioOne} />
        <audio ref={audioRef2} src={audioTwo} />
    </div>



}



export default Stage4;


