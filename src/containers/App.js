import React, { Component } from 'react'
import { Link } from 'react-router'

import style from './test.css'

class App extends Component {
  render () {
    return (
      <div className="box">
        <Link to={ '/login' } >Login</Link>
      </div>
    )
  }
}

export default App
