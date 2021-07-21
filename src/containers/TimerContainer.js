import React, { Component } from 'react';
import Timer from '../components/Timer'

class TimerContainer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Timer start={5} exercise={"Exercise #1"} />
                <Timer start={10} exercise={"Exercise #2"} />
            </div> 
        );
    }
}
 
export default TimerContainer;