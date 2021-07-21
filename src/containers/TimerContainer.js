import React, { Component } from 'react';
import Timer from '../components/Timer'
import AddTimerForm from '../components/AddTimerForm'

class TimerContainer extends Component {

    state = {
        exercises: []
    }

    nextTimer(){

    }

    render() { 
        return (
            <div>
                <AddTimerForm/>
                <Timer start={5} exercise={"Exercise #1"} />
                <Timer start={10} exercise={"Exercise #2"} />
            </div> 
        );
    }
}
 
export default TimerContainer;