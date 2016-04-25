import { connect } from 'react-redux'
import { fromJS } from 'immutable'
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

import { BundleView as BundleViewComponent } from '../../components'

const connectState = (state) => ({
  Route: state.Route.toJS(),
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

  shouldComponentUpdate (nextProps) {
    let oldRoute = fromJS(this.props.Route)
    let route = fromJS(nextProps.Route)

    return !route.equals(oldRoute)
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

    let navigation = props.Route.navigation
    let bundle = props.Route.bundle

    if (newBundle && this.isNewBundle(props) != newBundle) props.routeChangeNewBundle()
    if (bundleId && bundle.id != bundleId) props.routeChangeBundleId(bundleId)
    if (this.shouldChangeNavigationView(props)) props.routeChangeNavigationView(view)

    if (collectionId && navigation.collectionId != collectionId) {
      props.routeChangeNavigationCollectionId(collectionId)
    }
  }

  getNavigationView () {
    let view = this.props.Route.navigation.view || this.props.route.view

    if (view === 'collections')  return CollectionNavigation
    if (view === 'collectionsBundles')  return CollectionBundlesNavigation
    if (view === 'favorites')  return FavoriteNavigation
    if (view === 'notifications')  return NotificationNavigation

    return BundleNavigation
  }

  getBundleView () {
    if (!this.props.Route.bundle.id) {
      return BundleViewComponent.noBundleSelected
    }

    return this.isNewBundle(this.props) ? BundleNew : BundleView
  }

  shouldChangeNavigationView (props) {
    let { view, newBundle } = props.route
    let { bundleId } = props.params
    let navigation = props.Route.navigation

    return view && navigation.view != view && !bundleId && !newBundle
  }

  isNewBundle (props) {
    return props.Route.bundle.id == NEW_BUNDLE_ID
  }
}
