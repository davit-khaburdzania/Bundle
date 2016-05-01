import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import { sortedCollectionsSelector } from '../../../selectors'
import { nextId } from '../../../helpers'
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

  generateNewCollection () {
    let id = nextId(this.props.collections)

    this.props.generateNewCollection(id)
  }

  render () {
    return <Wrapper {...this.props}
      generateNewCollection={this.generateNewCollection.bind(this)}
    />
  }
}
