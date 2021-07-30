import React from 'react'

export default class AddTimerForm extends React.Component {

    state = {
        exercise: "", 
        seconds: ""
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(){

    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Exercise</label>
                <input type="text" name="exercise" value={this.state.exercise} onChange={this.handleChange.bind(this)}/>
                <label>Seconds</label>
                <input type="number" name="seconds" value={this.state.seconds} onChange={this.handleChange.bind(this)}/>
                <button type="submit">+</button>
            </form>
        )
    }
}