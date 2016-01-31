import React, { Component } from 'react'

class Counter extends Component {
  render () {
    const { increment, decrement, counter } = this.props

    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
      </p>
    )
  }
}

export default Counter
