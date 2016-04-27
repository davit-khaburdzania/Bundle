import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { sortedFavoritesSelector } from '../../../selectors'
import * as bundleActions from '../../../actions/Bundle'
import * as collectionActions from '../../../actions/Collection'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  favorites: sortedFavoritesSelector(state),
  bundles: state.Bundle.get('byId'),
  collections: state.Collection.get('byId'),
  bundleId: state.Route.bundleId,
  collectionId: state.Route.collectionId
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
    props.getFavorites()
  }

  render () {
    return <Wrapper {...this.props} />
  }

  static propTypes = {
    favorites: ImmutablePropTypes.list.isRequired,
    bundles: ImmutablePropTypes.map.isRequired,
    collections: ImmutablePropTypes.map.isRequired,
    bundleId: React.PropTypes.string,
    collectionId: React.PropTypes.string
  }
}
