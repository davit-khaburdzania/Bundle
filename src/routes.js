import { Route, IndexRedirect } from 'react-router'

import {
  App,
  Navigation,
  SearchContainer,
  BundleNew
} from './containers'

export default (
  <Route path='/' component={App}>
    <IndexRedirect to='/bundles' />

    <Route path='/search(/:query)' component={SearchContainer} />

    <Route path='/bundles' view='bundles' component={Navigation}>
      <Route path='/bundles/:bundle_id' component={Navigation} />
    </Route>

    <Route path='/new' newBundle={true} component={Navigation} />

    <Route path='/collections/:collection_id' view='collectionsBundles' component={Navigation}>
      <Route path='/collections/:collection_id/bundles/:bundle_id' view='collectionsBundles' component={Navigation} />
    </Route>
    <Route path='/collections' view='collections' component={Navigation} />
    <Route path='/favorites' view='favorites' component={Navigation}/>
    <Route path='/notifications' view='notifications' component={Navigation} />
  </Route>
)
