import { connect } from 'react-redux'
import * as collectionActions from '../../../actions/Collection'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collections: state.Collection.get('list').toJS()
})

const connectProps = {
  ...collectionActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class CollectionsNavigationContainer extends React.Component {
  constructor (props) {
    super(props)
    props.getCollections()
  }

  render () {
    return <Wrapper {...this.props} />
  }
}
