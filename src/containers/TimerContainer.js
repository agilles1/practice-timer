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
                {exercise: "Arban 1", start: 50}
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

    clearForm() {
        this.setState(
            {formData:{
                exercise: "",
                start: ""
                }
            })
    }

    render() { 

        let timers = this.state.timers.map(timer => <Timer key={timer.index} exercise={timer.exercise} start={timer.start}/>);

        return (
            <div>
                <AddTimerForm formValues={this.state.formData} onSubmitValue={this.handleSubmit} onChangeValue={this.handleChange}/>
                {timers}
            </div> 
        );
    }
}
 
export default TimerContainer;