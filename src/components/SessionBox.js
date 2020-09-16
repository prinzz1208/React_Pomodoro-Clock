import React from 'react'
import { SESSION } from '../containers/PomodoroClock'

function SessionBox(props) {
    return (
        <div className="SessionBox">
            <h2 id="session-label" className="heading--2">
            Session Length
            </h2>
            <i id= "session-decrement" className="fa fa-arrow-down" aria-hidden="true" onClick={(e) => props.decrementHandler(e,SESSION)}></i>
            <span id="session-length">{props.sessionLength}</span>
            <i id= "session-increment" className="fa fa-arrow-up" aria-hidden="true" onClick={(e) => props.incrementHandler(e,SESSION)}></i>            
        </div>
    )
}

export default SessionBox
