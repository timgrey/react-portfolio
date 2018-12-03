import React from 'react'
import {withCanvasContext} from '../Contexts/CanvasContext'

const Canvas = ({canvas}) => {
    return (
        <canvas id="mouseOverCanvas" ref={canvas}></canvas>
    )
}

export default withCanvasContext(Canvas)