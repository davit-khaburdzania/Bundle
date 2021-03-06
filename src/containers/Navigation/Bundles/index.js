import ImmutablePropTypes from 'react-immutable-proptypes'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { sortedBundlesSelector } from '../../../selectors'
import * as bundleActions from '../../../actions/Bundle'
import * as searchActions from '../../../actions/Search'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundles: sortedBundlesSelector(state),
  bundleId: state.Route.bundleId,
  search: state.Search
})

const connectProps = {
  ...bundleActions,
  ...searchActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends React.Component {
  static propTypes = {
    bundles: ImmutablePropTypes.list,
    search: ImmutablePropTypes.map
  }

  constructor (props) {
    super(props)
    props.getBundles()
  }

  removeBundle (...args) {
    this.props.removeBundle(...args)
    browserHistory.push('/bundles')
  }

  render () {
    return <Wrapper {...this.props} removeBundle={this.removeBundle.bind(this)}/>
  }
}
