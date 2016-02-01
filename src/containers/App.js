import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <Link to={ '/login' } >Login</Link>
      </div>
    )
  }
}

export default App
