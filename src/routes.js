import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import {
  App,
  Bundles,
  Collections,
  Favorites,
  Notifications
} from './containers'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/bundles' />

    <Route path='/bundles' component={Bundles} />
    <Route path='/collections' component={Collections} />
    <Route path='/favorites' component={Favorites}/>
    <Route path='/notifications' component={Notifications} />
  </Route>
)
