import React from 'react'

export default class AddTimerForm extends React.Component {

    state = {
        excercise: "", 
        seconds: ""
    }

    handleChange(){
        debugger
    }

    handleSubmit(){

    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                <label>Exercise</label>
                <input type="text" value={this.state.excercise} onChange={this.handleChange}/>
                <label>Seconds</label>
                <input type="number" value={this.state.seconds} onChange={this.handleChanget}/>
                <button type="submit">+</button>
            </form>
        )
    }
}