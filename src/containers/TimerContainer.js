import React, { Component } from 'react';
import Timer from '../components/Timer'
import AddTimerForm from '../components/AddTimerForm'

class TimerContainer extends Component {

    state = {
        timers: [
            {exercise: "Arban 1", start: 50}
        ]
    }

    nextTimer(){

    }

    

    render() { 

        let timers = this.state.timers.map(timer => <Timer key={timer.index} exercise={timer.exercise} start={timer.start}/>);

        return (
            <div>
                <AddTimerForm/>
                {timers}
            </div> 
        );
    }
}
 
export default TimerContainer;