import React, { Component } from 'react';
import Timer from '../components/Timer'

class TimerContainer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Timer start={60} exercise={"Exercise #1"} />
            </div> 
        );
    }
}
 
export default TimerContainer;