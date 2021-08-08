import React, { Component } from 'react';
import Timer from '../components/Timer'
import AddTimerForm from '../components/AddTimerForm'

class TimerContainer extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                exercise: "",
                start: ""
            },
            timers: [
                {exercise: "Arban 1", start: 50, active: false}
            ]};
      }

    handleChange(e) {
        this.setState(
            {formData:{
                ...this.state.formData,
                [e.target.name]: e.target.value}})
    }

    handleSubmit(e) {
        e.preventDefault()
        let newExercise = this.state.formData
        this.setState(
            {timers:[
                ...this.state.timers, newExercise]}
        )
        this.clearForm()
    }

    handleClick () {
        let timers = [...this.state.timers];
        let timer = {...timers[0]};
        timer.active = true;
        timers[0] = timer;
        this.setState({timers: timers});
    }

    clearForm() {
        this.setState(
            {formData:{
                exercise: "",
                start: ""
                }
            })
    }

    startTimers(){
       
    }

    render() { 

        let timers = this.state.timers.map(timer => <Timer key={timer.index} active={timer.active} exercise={timer.exercise} start={timer.start}/>);

        return (
            <div>
                <AddTimerForm formValues={this.state.formData} onSubmitValue={this.handleSubmit} onChangeValue={this.handleChange}/>
                {timers}
                <button onClick={this.handleClick.bind(this)}>Start</button>
            </div> 
        );
    }
}
 
export default TimerContainer;