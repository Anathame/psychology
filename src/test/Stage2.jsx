import React, {useEffect, useRef} from 'react';
import {Button} from "@mui/material";
import VisualTest from "./VisualTest";
import "./styles.css"
import VisualTest2 from "./VisualTest2";

function Stage2({advanceStage, addData, visualReactionTime}) {

    const buttonRef = useRef(null);

    const [thePressedKey, setPressedKey] = React.useState({});
    const [commence, setCommence] = React.useState(false);
    const [buttonText, setButtonText] = React.useState("READY");
    const [buttonColor, setButtonColor] = React.useState("error");
    const [readyToContinue, setReadyToContinue] = React.useState(false);
    const [theData, setTheData] = React.useState([]);

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





    const onClick = () => {
        if(commence === false) {
            setCommence(true);
            setButtonColor("info");
            setButtonText("Testing...");
        } else if(readyToContinue) {
            advanceStage();
        }



    };

    const keyIsPressed = (key) => {

        let temp = structuredClone(thePressedKey);
        temp["key"] = key.key;
        // setPressedKey(key.key);
        setPressedKey(temp);

        console.log("stage2 key: "+key.key);
    };

    const unfocus = () => {

        if(theData.length < 2) {
            buttonRef.current.focus();
        }

    };








    return <div className={"stage1box"}>
        <div>
            <p>Benchmarks are complete</p>
            <p>The next stage is reacting to two visual inputs at the same time</p>
            <p>It is the same as before, except when the left side box is filled, press F. When the right side box is filled, press J</p>
            <p>Unlike before, the test will advance without user input. So after pressing f or j, the test will continue until each box has been reacted to 5 times.</p>
            <div className={"bottomPadding"}>
                <Button ref={buttonRef} variant="contained" onClick={onClick} color={buttonColor} onKeyPress={keyIsPressed} onBlur={unfocus}>{buttonText}</Button>
            </div>

            <div className={"buttonBox"}>

                <div >
                    <VisualTest2  visualReactionTime={visualReactionTime} name={"Double Visual Left Box"} submit={submitTheData} advanceStage={advanceStage} keyPressed={thePressedKey} commence={commence} targetKey={"f"} reactionColor={"blue"}></VisualTest2>
                </div>

                <div className={"leftPadding"}>
                    <VisualTest2 className={"leftMargin"} visualReactionTime={visualReactionTime} name={"Double Visual Right Box"} submit={submitTheData} advanceStage={advanceStage} keyPressed={thePressedKey} commence={commence} targetKey={"j"} reactionColor={"red"}></VisualTest2>
                </div>


            </div>
        </div>
    </div>



}



export default Stage2;


