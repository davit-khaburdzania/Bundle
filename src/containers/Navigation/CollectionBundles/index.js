import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import * as collectionActions from '../../../actions/Collection'
import * as bundleActions from '../../../actions/Bundle'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collection: state.Collection.getIn(['byId', state.Route.collectionId]),
  bundles: state.Bundle.get('byId'),
  bundleId: state.Route.bundleId,
  collectionId: state.Route.collectionId
})

const connectProps = {
  ...collectionActions,
  ...bundleActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends React.Component {
  static propTypes = {
    collection: ImmutablePropTypes.record
  }

  constructor (props) {
    super(props)
    props.getCollection(props.collectionId)
  }

  render () {
    const { collection, ...wrapperProps } = this.props
    if (!collection || !collection.get('full_response')) return false

    return <Wrapper collection={collection} {...wrapperProps} />
  }
}
