import React, { Component } from 'react';
import BreakBox from '../components/BreakBox';
import SessionBox from '../components/SessionBox';
import TimerBox from '../components/TimerBox';

export const SESSION = "SESSION";
export const BREAK = "BREAK";
const audio = document.getElementById("beep");
class PomodoroClock extends Component {
    constructor(props) {
        super()
        this.loop = undefined;
    }
    state = {
        breakLength: 5,
        sessionLength: 25,
        clockCount: 25*60,
        currentTimer: 'Session',
        isPlaying: false,
        loop: undefined
    }
    startStopHandler = () => {
        const { isPlaying } = this.state;
        console.log("Clicked")
        if(isPlaying) {
            clearInterval(this.loop);
            this.setState({
                isPlaying: false
            });
        }else {
            this.setState({
                isPlaying: true 
            });
            this.loop = setInterval(() => {
                const {clockCount,currentTimer,breakLength,sessionLength} = this.state;
                if ( clockCount === 0 ){
                    this.setState({
                        currentTimer: currentTimer === 'Session' ? 'Break' : 'Session' ,
                        clockCount: (currentTimer === 'Session') ? (breakLength * 60) : (sessionLength * 60)
                    })
                    audio.play()
                }else{
                    this.setState({
                        clockCount: clockCount - 1
                    });
                }
    
            }, 1000);
        }
    }

    resetHandler = () => {
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            clockCount: 25 * 60,
            currentTimer: 'Session',
            isRunning: false,
            isPlaying: false,
        })
        clearInterval(this.loop);
        audio.pause();
        audio.currentTime = 0;
    }
    componentWillUnmount() {
        clearInterval(this.loop);
    }
    incrementHandler = (e, type) => {
        if(!this.state.isPlaying){
            const {breakLength,sessionLength} = this.state
            switch(type){
                case BREAK:{
                    if( breakLength <= 59){
                        this.setState(oldState => (
                            {
                            breakLength: breakLength + 1   
                            }
                        ))
                    }
                    break;

                }
                case SESSION: {
                    if( sessionLength <= 59){
                        this.setState(oldState => (
                            {
                            sessionLength: sessionLength + 1,
                            clockCount: (sessionLength + 1 )* 60
                            }
                        ))
                    }
                    break;
                }
                default:{}

            }
        }
    }

    decrementHandler = (e, type) => {
        if(!this.state.isRunning){
            const {breakLength,sessionLength} = this.state
            switch(type){
                case BREAK:{
                    if(breakLength > 1 ){
                        this.setState(oldState => (
                            {
                            breakLength: breakLength - 1   
                            }
                        ))
                    }
                    break;

                }
                case SESSION: {
                    if(sessionLength > 1 ){

                        this.setState(oldState => (
                            {
                            sessionLength: sessionLength - 1,   
                            clockCount: (sessionLength + 1 ) * 60
                        }
                        ))
                    }
                    break;
                }
                default:{}
            }
        }
    }

    
    render() {
        return(
         <div className="PomodoroClock">
                <h1 className="heading--1">Pomodoro Clock</h1>
                <div className="container">
                    <BreakBox breakLength={this.state.breakLength} incrementHandler={(e,type) => this.incrementHandler(e,type)} decrementHandler={(e,type) => this.decrementHandler(e,type)}/>
                    <SessionBox sessionLength={this.state.sessionLength} incrementHandler={(e,type) => this.incrementHandler(e,type)} decrementHandler={(e,type) => this.decrementHandler(e,type)}/>                   
                </div>
                <TimerBox title={this.state.currentTimer} timer={this.state.clockCount} startStopHandler={this.startStopHandler} resetHandler={this.resetHandler} />
            </div>   
        );
    }
}

export default PomodoroClock;
