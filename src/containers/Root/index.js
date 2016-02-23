import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'

import DevTools from './../../utils/DevTools'

import createStore from './../../store/createStore'
import history from './../../utils/history'

let store = createStore({})

import {
  App,
  Bundles,
  Collections,
  Favorites,
  Notifications
} from '../'

export default function Root () {
  return (
    <Provider store={store}>
      <div className='root-container'>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRedirect to='/bundles' />

            <Route path='/bundles' component={Bundles} />
            <Route path='/collections' component={Collections} />
            <Route path='/favorites' component={Favorites}/>
            <Route path='/notifications' component={Notifications} />
          </Route>
        </Router>
        <DevTools/>
      </div>
    </Provider>
  )
}
