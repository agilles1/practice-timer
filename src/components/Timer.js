import React from 'react'

export default class Timer extends React.Component {

  state = {
    time: this.props.start,
    active: false
  }

  componentDidMount(){
    if (this.state.active) { 
      setInterval(() => {
        this.setState({
          time: this.state.time - 1
        })
      }, 1000)
    }
  }

  render(){
    return (
      <div>
        {this.props.exercise} | {this.state.time}
      </div>
    )
  }

} 

