import React, {useRef} from 'react';
import {useEffect, useState} from "react";
import Stage0 from "./Stage0";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import VisualTest from "./VisualTest";
import AudioTest from "./AudioTest";
import AudioTest2 from "./AudioTest2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";
import Results from "./Results";




function Director({keyPressed}) {


    const [data,setData] = useState([]);
    const [stage, setStage] = useState(0);

    const [benchmarkVisualValues, setBenchmarkVisualValues] = useState([]);
    const [benchmarkAudioValues, setBenchmarkAudioValues] = useState([]);

    const [averageVisualReactionSpeed, setAverageVisualReactionSpeed] = useState(-1);
    const [averageAudioReactionSpeed, setAverageAudioReactionSpeed] = useState(-1);

    const [doubleVisualData, setDoubleVisualData] = useState(null);
    const [doubleAudioData, setDoubleAudioData] = useState(null);

    const [audioAndVisual, setAudioAndVisual] = useState(null);





    const addVisualBenchmarkValue = (value) => {
        let temp = structuredClone(benchmarkVisualValues);
        temp.push(value)
        setBenchmarkVisualValues(temp);
    }

    const addAudioBenchmarkValue = (value) => {
        let temp = structuredClone(benchmarkAudioValues);
        temp.push(value)
        setBenchmarkAudioValues(temp);
    }



    const advanceStage = () => {
        setStage(stage + 1);
    };

    const getStage = (stageNumber) => {
        switch(stageNumber) {
            case 0:
                return <Stage0 advanceStage={advanceStage}></Stage0>
                // return <Results audioAndVisual={audioAndVisual} averageAudio={averageAudioReactionSpeed} averageVisual={averageVisualReactionSpeed} benchmarkAudio={benchmarkAudioValues} benchmarkVisual={benchmarkVisualValues} doubleVisual={doubleVisualData} doubleAudio={doubleAudioData}></Results>
            case 1:
                return <Stage1 advanceStage={advanceStage}></Stage1>
            case 2:
                return <VisualTest advanceStage={advanceStage} keyPressed={keyPressed} addVisualValue={addVisualBenchmarkValue}></VisualTest>
            case 3:
                return <AudioTest advanceStage={advanceStage} keyPressed={keyPressed} addAudioValue={addAudioBenchmarkValue}></AudioTest>
            case 4:

                if(averageVisualReactionSpeed === -1 && averageAudioReactionSpeed === -1) {
                    let bob = benchmarkVisualValues;
                    let bob2 = benchmarkAudioValues;

                    let audioSum = 0;

                    for(let i = 0; i < benchmarkAudioValues.length; i++) {
                        audioSum += benchmarkAudioValues[i];
                    }

                    audioSum = audioSum / benchmarkAudioValues.length;


                    let visualSum = 0;

                    for(let i = 0; i < benchmarkVisualValues.length; i++) {
                        visualSum += benchmarkVisualValues[i];
                    }

                    visualSum = visualSum / benchmarkVisualValues.length;

                    setAverageVisualReactionSpeed(visualSum);
                    setAverageAudioReactionSpeed(audioSum);

                    console.log("average visual reaction speed: "+visualSum);
                    console.log("average audio reaction speed: "+audioSum);
                }

                return <Stage2 visualReactionTime={averageVisualReactionSpeed} addData={setDoubleVisualData} advanceStage={advanceStage}></Stage2>
            case 5:
                return <Stage3 audioReactionTime={averageAudioReactionSpeed} addData={setDoubleAudioData} advanceStage={advanceStage}></Stage3>
            case 6:
                return <Stage4 audioReactionTime={averageAudioReactionSpeed} visualReactionTime={averageVisualReactionSpeed} addData={setAudioAndVisual} advanceStage={advanceStage}></Stage4>
            case 7:
                return <Results audioAndVisual={audioAndVisual} averageAudio={averageAudioReactionSpeed} averageVisual={averageVisualReactionSpeed} benchmarkAudio={benchmarkAudioValues} benchmarkVisual={benchmarkVisualValues} doubleVisual={doubleVisualData} doubleAudio={doubleAudioData}></Results>

        }
    }





    useEffect(()=>{



    },[]);


    return <div>{getStage(stage)}</div>

}














export default Director;