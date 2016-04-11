import { connect } from 'react-redux'
import * as collectionActions from '../../../actions/Collection'
import * as bundleActions from '../../../actions/Bundle'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collection: state.Collection.toJS(),
  bundleId: state.Route.getIn(['bundle', 'id']),
  collectionId: state.Route.getIn(['navigation', 'collectionId'])
})

const connectProps = {
  ...collectionActions,
  ...bundleActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends React.Component {
  constructor (props) {
    super(props)
    props.getCollection(props.collectionId)
  }

  render () {
    const { collection, ...wrapperProps } = this.props

    if (!collection.current) return false

    return <Wrapper collection={collection.current} {...wrapperProps} />
  }

  static propTypes = {
    collection: React.PropTypes.object.isRequired
  }
}
