import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App'
import BundlesContainer from './components/BundlesContainer'
import CollectionsContainer from './components/CollectionsContainer'
import FavoritesContainer from './components/FavoritesContainer'
import NotificationsContainer from './components/NotificationsContainer'

let routes = (
  <Route path='/' component={App}>
    <IndexRedirect to='/bundles' />

    <Route path='/bundles' component={BundlesContainer} />
    <Route path='/collections' component={CollectionsContainer} />
    <Route path='/favorites' component={FavoritesContainer}/>
    <Route path='/notifications' component={NotificationsContainer} />
  </Route>
)

export default routes
