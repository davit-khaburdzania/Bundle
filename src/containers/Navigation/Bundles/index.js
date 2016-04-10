import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as searchActions from '../../../actions/Search'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundles: state.Bundle.get('list').toJS(),
  search: state.Search.toJS(),
  currentBundleId: state.Route.getIn(['bundle', 'id'])
})

const connectProps = {
  ...bundleActions,
  ...searchActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends React.Component {
  constructor (props) {
    super(props)
    props.getBundles()
  }

  render () {
    return <Wrapper {...this.props} />
  }

  static propTypes = {
    bundles: React.PropTypes.array.isRequired,
    search: React.PropTypes.object.isRequired
  }
}
