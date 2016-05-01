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

  nextId (collections) {
    let max = collections.keySeq().filter(id => id < 0).max() || 0
    return (max - 1).toString()
  }

  generateNewCollection () {
    let { collections, generateNewCollection } = this.props

    generateNewCollection(this.nextId(collections))
  }

  render () {
    return <Wrapper {...this.props}
      generateNewCollection={this.generateNewCollection.bind(this)}
    />
  }
}
