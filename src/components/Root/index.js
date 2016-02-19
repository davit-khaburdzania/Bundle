import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect } from 'react-router'

import App from './../App'
import DevTools from './../DevTools'
import BundlesContainer from './../BundlesContainer'
import CollectionsContainer from './../CollectionsContainer'
import FavoritesContainer from './../FavoritesContainer'
import NotificationsContainer from './../NotificationsContainer'

import createStore from './../../store/createStore'
import history from './../../history'

let store = createStore({})

export default function Root () {
  return (
    <Provider store={store}>
      <div className='root-container'>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRedirect to='/bundles' />

            <Route path='/bundles' component={BundlesContainer} />
            <Route path='/collections' component={CollectionsContainer} />
            <Route path='/favorites' component={FavoritesContainer}/>
            <Route path='/notifications' component={NotificationsContainer} />
          </Route>
        </Router>

        <DevTools/>
      </div>
    </Provider>
  )
}
