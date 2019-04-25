// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {
  
  const test = () => {
    console.log('hey')
  }

  return (
    <div onClick={props.handleClick}>I am just happy</div>
  )
}

export default SimplerComponent