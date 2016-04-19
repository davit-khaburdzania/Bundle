import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundles: state.Favorite.get('bundles'),
  bundleId: state.Route.getIn(['bundle', 'id']),
  collections: state.Favorite.get('collections'),
  collectionId: state.Route.getIn(['navigation', 'collectionId'])
})

const connectProps = {
  ...bundleActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends React.Component {
  constructor (props) {
    super(props)
    props.getFavorites()
  }

  render () {
    const { bundles, collections } = this.props
    console.log('bundles : ', bundles)

    if (!bundles) return false

    return (
      <Wrapper {...this.props} />
    )
  }

  static propTypes = {
    bundles: ImmutablePropTypes.list,
    collections: ImmutablePropTypes.list
  }
}
