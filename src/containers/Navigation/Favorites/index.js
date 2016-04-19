import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundles: state.Bundle.get('list'),
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
    return <Wrapper {...this.props} />
  }

  static propTypes = {
    bundles: ImmutablePropTypes.list
  }
}
