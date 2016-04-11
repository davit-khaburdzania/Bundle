import { connect } from 'react-redux'
import * as routeActions from '../../actions/Route'

import {
  BundleNavigation,
  CollectionNavigation,
  CollectionBundlesNavigation,
  FavoriteNavigation,
  NotificationNavigation,
  BundleView
} from '..'


const connectState = (state) => ({
  route: state.Route
})

const connectProps = routeActions

@connect(connectState, connectProps)
export default class Navigation extends React.Component {
  getViewFromRoute (props) {
    const { routes, params } = props
    return routes[routes.length-1].view
  }

  parseRouteChange (props) {
    const view = this.getViewFromRoute(props)
    const params = props.params

    if (view) props.routeChangeNavigationView(view)
    if (params.bundle_id) props.routeChangeBundleId(params.bundle_id)

    if (params.collection_id) {
      props.routeChangeNavigationCollectionId(params.collection_id)
    }
  }

  constructor (props) {
    super(props)
    this.parseRouteChange(props)
  }

  componentWillUpdate (nextProps) {
    this.parseRouteChange(nextProps)
  }

  render () {
    let view = this.props.route.getIn(['navigation', 'view'])
    let NavigationView = BundleNavigation

    if (view != this.getViewFromRoute(this.props)) return false

    if (view === 'collections')  NavigationView = CollectionNavigation
    if (view === 'collectionsBundles')  NavigationView = CollectionBundlesNavigation
    if (view === 'favorites')  NavigationView = FavoriteNavigation
    if (view === 'notifications')  NavigationView = NotificationNavigation

    return (
      <div className='navigation-wrapper'>
        <NavigationView />
        <BundleView />
      </div>
    )
  }
}
