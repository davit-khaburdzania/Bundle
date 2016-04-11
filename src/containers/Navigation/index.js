import { connect } from 'react-redux'
import * as routeActions from '../../actions/Route'

import './index.css'

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
  routeBundle: state.Route.get('bundle'),
  routeNavigation: state.Route.get('navigation')
})

const connectProps = routeActions

@connect(connectState, connectProps)
export default class Navigation extends React.Component {
  parseRouteChange (props) {
    const view = props.route.view
    const newBundle = props.route.newBundle
    const { bundle_id, collection_id } = props.params

    if (view) props.routeChangeNavigationView(view)
    if (newBundle) props.routeChangeNewBundle(true)

    if (bundle_id) props.routeChangeBundleId(bundle_id)
    if (collection_id) props.routeChangeNavigationCollectionId(collection_id)
  }

  shouldRender () {
    let view = this.props.routeNavigation.get('view')
    let routeView = this.props.route.view
    let newBundle = this.props.routeBundle.get('newBundle')
    let routeNewBundle = this.props.route.newBundle

    if (view != routeView && routeView) return false
    if (newBundle != routeNewBundle && routeNewBundle) return false

    return true
  }

  getNavigationView () {
    let view = this.props.routeNavigation.get('view')

    if (view === 'collections')  return CollectionNavigation
    if (view === 'collectionsBundles')  return CollectionBundlesNavigation
    if (view === 'favorites')  return FavoriteNavigation
    if (view === 'notifications')  return NotificationNavigation

    return BundleNavigation
  }

  getBundleView () {
    let newBundle = this.props.routeBundle.get('newBundle')
    return newBundle ? BundleNew : BundleView
  }

  constructor (props) {
    super(props)
    this.parseRouteChange(props)
  }

  componentWillUpdate (nextProps) {
    this.parseRouteChange(nextProps)
  }

  render () {
    let NavigationComponent = this.getNavigationView()
    let BundleViewComponent = this.getBundleView()

    if (!this.shouldRender()) return false

    return (
      <div className='navigation-wrapper'>
        <NavigationComponent />
        <BundleViewComponent />
      </div>
    )
  }
}
