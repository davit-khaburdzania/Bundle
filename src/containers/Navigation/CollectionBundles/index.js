import { connect } from 'react-redux'
import { currentCollectionSelector, sortedCollectionBundlesSelector } from '../../../selectors'
import * as collectionActions from '../../../actions/Collection'
import * as bundleActions from '../../../actions/Bundle'
import * as favoriteActions from '../../../actions/Favorite'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collection: currentCollectionSelector(state),
  bundles: sortedCollectionBundlesSelector(state),
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
