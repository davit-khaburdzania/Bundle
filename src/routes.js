import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import {
  App,
  BundleNavigation,
  CollectionNavigation,
  FavoriteNavigation,
  NotificationNavigation,
  SearchContainer
} from './containers'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/bundles' />

    <Route path='/bundles' component={BundleNavigation} />
    <Route path='/search(/:query)' component={SearchContainer} />
    <Route path='/collections' component={CollectionNavigation} />
    <Route path='/favorites' component={FavoriteNavigation}/>
    <Route path='/notifications' component={NotificationNavigation} />
  </Route>
)
