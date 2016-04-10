import { Route, IndexRedirect } from 'react-router'

import {
  App,
  Navigation,
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

    <Route path='/bundles' view='bundles' component={Navigation}>
      <Route path='/bundles/:bundle_id' component={Navigation} />
    </Route>

    <Route path='/new' component={BundleNew} />

    <Route path='/collections/:id' component={CollectionBundlesNavigation}>
      <Route path='/collections/:id/bundles/:bundle_id' component={BundleView} />
    </Route>
    <Route path='/collections' view='collections' component={Navigation} />
    <Route path='/favorites' view='favorites' component={Navigation}/>
    <Route path='/notifications' view='notifications' component={Navigation} />
  </Route>
)
