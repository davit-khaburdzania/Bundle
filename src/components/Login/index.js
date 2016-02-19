import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Login extends Component {
  render () {
    return (
      <div>
        Login now!
        <br />
        <Link to='/'>Home</Link>
      </div>
    )
  }
}
