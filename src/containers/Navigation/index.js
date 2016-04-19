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
  constructor (props) {
    super(props)
    this.parseRouteChange(props)
  }

  componentWillReceiveProps (nextProps) {
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

  parseRouteChange (props) {
    let { view, newBundle } = props.route
    let { bundleId, collectionId } = props.params

    let navigation = props.routeNavigation
    let bundle = props.routeBundle

    if (view && navigation.get('view') != view) props.routeChangeNavigationView(view)
    if (newBundle && this.isNewBundle(props) != newBundle) props.routeChangeNewBundle()
    if (bundleId && bundle.get('id') != bundleId) props.routeChangeBundleId(bundleId)

    if (collectionId && navigation.get('collectionId') != collectionId) {
      props.routeChangeNavigationCollectionId(collectionId)
    }
  }

  shouldRender () {
    let view = this.props.routeNavigation.get('view')
    let routeView = this.props.route.view
    let routeNewBundle = this.props.route.newBundle

    if (view != routeView && routeView) return false
    if (this.isNewBundle(this.props) != routeNewBundle && routeNewBundle) return false

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
    return this.isNewBundle(this.props) ? BundleNew : BundleView
  }

  isNewBundle (props) {
    return props.routeBundle.get('id') == '-1'
  }
}
