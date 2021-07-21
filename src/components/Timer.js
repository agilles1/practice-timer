import React from 'react'

export default class Timer extends React.Component {

  state = {
    start: this.props.start,
    active: false
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        start: this.state.start - 1
      })
    }, 1000)
  }

  render(){
    return (
      <div>
        {this.props.exercise} | {this.state.start}
      </div>
    )
  }

} 

