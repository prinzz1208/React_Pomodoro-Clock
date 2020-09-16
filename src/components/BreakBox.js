import React from 'react'
import { BREAK } from '../containers/PomodoroClock';

function BreakBox(props) {
    return (
        <div className="BreakBox">
            <h2 id="break-label" className="heading--2">
            Break Length
            </h2>
            <i id= "break-decrement"className="fa fa-arrow-down" aria-hidden="true" onClick={(e) => props.decrementHandler(e,BREAK)}></i>
            <span id="break-length">{props.breakLength}</span>
            <i id= "break-increment"className="fa fa-arrow-up" aria-hidden="true" onClick={(e) => props.incrementHandler(e,BREAK)}></i>            

        </div>
    )
}

export default BreakBox;
