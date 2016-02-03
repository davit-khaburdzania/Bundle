import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { App, Login, DevTools } from '../'
import createStore from '../../store/createStore'
import history from '../../history'

let store = createStore({})

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="root-container">
          <Router history={ history }>
            <Route path='/' component={ App } />
            <Route path='/login' component={ Login } />
          </Router>

          <DevTools/>
        </div>
      </Provider>
    )
  }
}

export { Root }
