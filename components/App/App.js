import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        Hello Stranger!
        <br />
        <Link to={ '/login' } >Login</Link>
      </div>
    )
  }
}

export { App }
