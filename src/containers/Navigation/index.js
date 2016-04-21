import { connect } from 'react-redux'
import { NEW_BUNDLE_ID } from '../../constants'
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

    if (newBundle && this.isNewBundle(props) != newBundle) props.routeChangeNewBundle()
    if (bundleId && bundle.get('id') != bundleId) props.routeChangeBundleId(bundleId)
    if (this.shouldChangeNavigationView(props)) props.routeChangeNavigationView(view)

    if (collectionId && navigation.get('collectionId') != collectionId) {
      props.routeChangeNavigationCollectionId(collectionId)
    }
  }

  getNavigationView () {
    let view = this.props.routeNavigation.get('view') || this.props.route.view

    if (view === 'collections')  return CollectionNavigation
    if (view === 'collectionsBundles')  return CollectionBundlesNavigation
    if (view === 'favorites')  return FavoriteNavigation
    if (view === 'notifications')  return NotificationNavigation

    return BundleNavigation
  }

  getBundleView () {
    return this.isNewBundle(this.props) ? BundleNew : BundleView
  }

  shouldChangeNavigationView (props) {
    let { view, newBundle } = props.route
    let { bundleId } = props.params
    let navigation = props.routeNavigation

    return view && navigation.get('view') != view && !bundleId && !newBundle
  }

  isNewBundle (props) {
    return props.routeBundle.get('id') == NEW_BUNDLE_ID
  }
}
