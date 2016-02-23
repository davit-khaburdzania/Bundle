import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'

import DevTools from './../../utils/DevTools'
import history from './../../utils/history'
import routes from './../../routes'
import createStore from './../../store/createStore'

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
