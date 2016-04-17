import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import * as searchActions from '../../actions/Search'
import * as bundleActions from '../../actions/Bundle'
import * as favoriteActions from '../../actions/Favorite'
import SearchWrapper from './wrapper'

const connectState = (state) => ({ searchResults: state.Search.get('result') })
const connectProps = {
  ...bundleActions,
  ...searchActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class SearchContainer extends React.Component {
  componentWillMount () {
    let query = this.props.routeParams.query

    if (query) this.props.getSearchResult(query)
  }

  componentWillReceiveProps (nextProps) {
    let thisPropsQuery = this.props.routeParams.query
    let nextPropsQuery = nextProps.routeParams.query

    if (!nextPropsQuery) {
      nextProps.getSearchResult()
    } else if (thisPropsQuery !== nextPropsQuery && nextPropsQuery) {
      nextProps.getSearchResult(nextPropsQuery)
    }
  }

  render () {
    const { searchResults, routeParams } = this.props

    return (
      <SearchWrapper
        query={routeParams.query}
        searchResults={searchResults}
        removeBundle={this.props.removeBundle}
        favorite={this.props.favorite}
        unfavorite={this.props.unfavorite}
      />
    )
  }
}

SearchContainer.propTypes = {
  searchResults: ImmutablePropTypes.map
}
