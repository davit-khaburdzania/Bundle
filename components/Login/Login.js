import React, { Component } from 'react'
import { Link } from 'react-router'

class Login extends Component {
  render () {
    return (
      <div>
        Login now!
        <br />
        <Link to={ '/' } >Home</Link>
      </div>
    )
  }
}

export { Login }
