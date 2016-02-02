import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import history from '../history'

import Login from './Login'
import App from './App'

class Root extends Component {
  render () {
    return (
      <Router history={ history } >
        <Route path='/' component={ App } />
        <Route path='/login' component={ Login } />
      </Router>
    )
  }
}

export default Root
