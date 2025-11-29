import React, {useRef, useEffect, useState} from 'react'

const ReactCanvas = ({filled,color}) => {

    const canvasRef = useRef(null)


    const draw = ctx => {
        ctx.rect(0,0,999,999);
        ctx.fillStyle = color;
        ctx.fill();
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        if(filled) {
            draw(context)
        }

    }, [draw])

    return <canvas ref={canvasRef} className={"exampleCanvas"}/>
}


export default ReactCanvas;