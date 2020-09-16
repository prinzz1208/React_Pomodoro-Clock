import React from 'react'

import { useState } from 'react';

function TimerBox(props) {
    function toTimerFormat(totalSec){             
        var min = Math.floor(totalSec / 60) ;
        var sec = (totalSec % 60);
        min = (min < 10) ?  "0" + min : min; 
        sec = (sec < 10) ?  "0" + sec : sec; 
        return(`${min}:${sec}`)
    }

 
    return (
        <div className="TimerBox">
            <h2 id="timer-label">{props.title}</h2>
            <div id="time-left" >{toTimerFormat(props.timer)}</div>
            <button id="start_stop" onClick={() => props.startStopHandler()}><i className="fa fa-play" aria-hidden="true"></i></button>
            <button id="reset" onClick={(e) => props.resetHandler(e)}><i className="fa fa-refresh" aria-hidden="true"></i></button>
    
        </div>
    )
}

export default TimerBox
