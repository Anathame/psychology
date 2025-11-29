import React, {useRef, useEffect, useState} from 'react'
import {Button} from "@mui/material";
import ReactCanvas from "./ReactCanvas";
import "./styles.css"


function VisualTest2 ({advanceStage, keyPressed, targetKey, commence, reactionColor, submit, name, visualReactionTime}) {

    useEffect(() => {
        if(commence) {

            let bob = keyPressed;
            if(keyPressed["key"]===targetKey) {
                onReact();
                console.log("a key has been pressed");
            }

            // if (advanceToNextStage) {
            //     advanceStage();
            // } else {
            //     ready();
            // }
        }

    },[keyPressed]);


    useEffect(() => {

        if(commence) {
            ready();
        }


    },[commence]);

    const [resultText, setResultText] = useState("");
    const [error, setError] = useState(0);
    const [reactionState, setReactionState] = useState("invalid");

    const [advanceToNextStage, setAdvanceToNextStage] = useState(false);

    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [color, setColor] = useState(null);
    const [filled, setFilled] = useState(false);

    const [buttonText, setButtonText] = useState("READY");
    const [buttonColor, setButtonColor] = useState("error");

    const [iteration, setIteration] = useState(0);

    const [data, setData] = useState([]);


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
        setReactionState("invalid");

        let postvaliderror = 0;
        let time = Date.now()-startTime;


        if(time > visualReactionTime+50) {
            postvaliderror++;
        }


        console.log("DONE!!!");
        console.log("error:"+(error+postvaliderror));
        let bob4 = endTime;
        let bob2 = startTime;
        console.log("reaction time: "+(Date.now()-startTime));
        setFilled(true);
        setColor("white");
        setIteration(iteration + 1);
        setResultText("Reaction time: "+(Date.now()-startTime)+"ms error: "+(error+postvaliderror));

        let temp = structuredClone(data);

        temp.push({"time": time, "error": (error+postvaliderror)});

        setData(temp);

        if(iteration >=4) {
            setButtonColor("success");
            setButtonText("CONTINUE");
            setAdvanceToNextStage(true);


            let totalError = 0;
            let averageError = 0;
            let averageTime = 0;

            let times = [];
            let errors = [];

            for(let i = 0; i < temp.length; i++) {
                totalError = totalError + temp[i]["error"];
                averageTime = averageTime + temp[i]["time"];
                times.push(temp[i]["time"]);
                errors.push(temp[i]["error"]);
            }

            times.sort();
            errors.sort();
            averageError = totalError/(iteration+1);
            averageTime = averageTime/(iteration+1);


            let newData = {"Trials": temp, "Total Error": totalError, "Average Error": averageError, "Average Time": averageTime, "Median Time": times[2], "Median Error": errors[2]};


            let submission = {"name": name, "data": newData};

            submit(submission);
            //submit here
        } else {
            ready();
        }



        // setButtonDisabled(false);
    };

    const ready = () => {
        console.log("READY");
        setResultText("");
        setFilled(true);
        setColor("white");
        setReactionState("invalid");
        setTimeout(stim, getRandomArbitrary(300, 5000));

    };

    const stim = () => {
        setStartTime(Date.now());
        setReactionState("valid");
        setFilled(true);
        setColor(reactionColor);
    };


    return <div className={"stage2box"}>
        <div>
            {/*<p>The visual stimuli test will run three times.</p>*/}
            {/*<p>The box in the middle of the screen will be filled red, once this occurs, press J on the keyboard.</p>*/}
            {/*<p>Your mean reaction time for the stimuli will be used in future tests</p>*/}
            {/*<p>Pressing the READY button will run the test once.</p>*/}



            <div>
                <div>
                    <div className={"buttonBox"}>
                        {/*<div>*/}
                        {/*    <Button variant="contained" color={buttonColor} onClick={onClick} onKeyPress={keyPress}>{buttonText}</Button>*/}
                        {/*</div>*/}

                        {/*<div>*/}
                        {/*    <p>{resultText !== null ?  resultText : ""}</p>*/}
                        {/*</div>*/}

                    </div>
                    <div>
                        <ReactCanvas color={color} filled={filled}></ReactCanvas>
                    </div>
                </div>

            </div>

        </div>

    </div>







}




export default VisualTest2;