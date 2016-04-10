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
  parseRouteChange (props) {
    const { routes, params } = props
    const view = routes[routes.length-1].view

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

  componentWillReceiveProps (nextProps) {
    this.parseRouteChange(nextProps)
  }

  render () {
    let view = this.props.route.getIn(['navigation', 'view'])
    let NavigationView = BundleNavigation

    if (view === 'collections')  NavigationView = CollectionNavigation
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
