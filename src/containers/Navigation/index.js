import { connect } from 'react-redux'
import * as routeActions from '../../actions/Route'

import {
  BundleNavigation,
  CollectionNavigation,
  CollectionBundlesNavigation,
  FavoriteNavigation,
  NotificationNavigation,
  BundleView,
  BundleNew
} from '..'


const connectState = (state) => ({
  routeState: state.Route
})

const connectProps = routeActions

@connect(connectState, connectProps)
export default class Navigation extends React.Component {
  inNewBundle (props) {
    return props.route.path == '/new'
  }

  parseRouteChange (props) {
    const view = props.route.view
    const newBundle = props.route.newBundle
    const { bundle_id, collection_id } = props.params

    if (view) props.routeChangeNavigationView(view)
    if (newBundle) props.routeChangeNewBundle(true)

    if (bundle_id) props.routeChangeBundleId(bundle_id)
    if (collection_id) props.routeChangeNavigationCollectionId(collection_id)
  }

  constructor (props) {
    super(props)
    this.parseRouteChange(props)
  }

  componentWillUpdate (nextProps) {
    this.parseRouteChange(nextProps)
  }

  shouldRender () {
    let view = this.props.routeState.getIn(['navigation', 'view'])
    let routeView = this.props.route.view
    let newBundle = this.props.routeState.getIn(['bundle', 'newBundle'])
    let routeNewBundle = this.props.route.newBundle

    if (view != routeView && routeView) return false
    if (newBundle != routeNewBundle && routeNewBundle) return false

    return true
  }

  render () {
    let view = this.props.routeState.getIn(['navigation', 'view'])
    let NavigationView = BundleNavigation
    let BundleNavigationView = BundleView

    if (!this.shouldRender()) return false

    if (this.props.routeState.getIn(['bundle', 'newBundle'])) {
      BundleNavigationView = BundleNew
    }

    if (view === 'collections')  NavigationView = CollectionNavigation
    if (view === 'collectionsBundles')  NavigationView = CollectionBundlesNavigation
    if (view === 'favorites')  NavigationView = FavoriteNavigation
    if (view === 'notifications')  NavigationView = NotificationNavigation

    return (
      <div className='navigation-wrapper'>
        <NavigationView />
        <BundleNavigationView />
      </div>
    )
  }
}
