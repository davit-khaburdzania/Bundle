import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { sortedCollectionsSelector } from '../../../selectors'
import * as collectionActions from '../../../actions/Collection'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  collections: sortedCollectionsSelector(state)
})

const connectProps = {
  ...collectionActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class CollectionsNavigationContainer extends React.Component {
  static propTypes = {
    collections: ImmutablePropTypes.list
  }

  constructor (props) {
    super(props)
    props.getCollections()
  }

  render () {
    return <Wrapper {...this.props}/>
  }
}
