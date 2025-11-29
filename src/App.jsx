import React from 'react';
import {useEffect} from "react";
import Header from "./header/Header";
import Director from "./test/Director";


const App = ({keyPressed}) => {


    useEffect(() => {
        console.log('App rendered');
    },[]);

    return <div>

        <Header></Header>

        <Director keyPressed={keyPressed}></Director>


    </div>





}


export default App;