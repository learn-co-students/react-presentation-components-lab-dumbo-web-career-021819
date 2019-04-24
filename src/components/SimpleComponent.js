// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    const clickedMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: clickedMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
