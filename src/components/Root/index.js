import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import DevTools from './../DevTools'

import createStore from './../../store/createStore'
import history from './../../history'
import routes from './../../routes'

let store = createStore({})

export default function Root () {
  return (
    <Provider store={store}>
      <div className='root-container'>
        <Router history={history} routes={routes} />
        <DevTools/>
      </div>
    </Provider>
  )
}
