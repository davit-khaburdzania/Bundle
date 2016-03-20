import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import {
  App,
  BundleNavigation,
  CollectionNavigation,
  CollectionBundlesNavigation,
  FavoriteNavigation,
  NotificationNavigation,
  SearchContainer,
  BundleView,
  BundleNew
} from './containers'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/bundles' />

    <Route path='/search(/:query)' component={SearchContainer} />

    <Route path='/bundles' component={BundleNavigation}>
      <Route path='/bundles/:bundle_id' component={BundleView} />
    </Route>

    <Route path='/new' component={BundleNew} />

    <Route path='/collections/:id' component={CollectionBundlesNavigation}>
      <Route path='/collections/:id/bundles/:bundle_id' component={BundleView} />
    </Route>
    <Route path='/collections' component={CollectionNavigation} />
    <Route path='/favorites' component={FavoriteNavigation}/>
    <Route path='/notifications' component={NotificationNavigation} />
  </Route>
)
