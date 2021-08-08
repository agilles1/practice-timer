import React from 'react'

export default class Timer extends React.Component {

  state = {
    time: this.props.start
  }

  componentDidMount(){
    this.setState({active: this.props.active})
    
    if (this.props.active) { 
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

