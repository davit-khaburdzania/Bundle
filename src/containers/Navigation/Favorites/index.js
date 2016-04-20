import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as collectionActions from '../../../actions/Collection'

import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  list: state.Favorite.get('list'),
  bundleId: state.Route.getIn(['bundle', 'id']),
  collectionId: state.Route.getIn(['navigation', 'collectionId'])
})

const connectProps = {
  ...bundleActions,
  ...collectionActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends React.Component {
  constructor (props) {
    super(props)
    props.getFavoritesList()
  }

  render () {
    const { list } = this.props

    if (!list) return false

    return <Wrapper {...this.props} />
  }

  static propTypes = {
    list: ImmutablePropTypes.list
  }
}
