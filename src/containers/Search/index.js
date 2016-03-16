import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as searchActions from '../../actions/Search'

import SearchWrapper from './wrapper'

const connectState = (state) => ({ searchResults: state.Search.toJS().result })
const connectProps = { ...searchActions }

@connect(connectState, connectProps)
export default class SearchContainer extends Component {
  componentWillMount () {
    let query = this.props.routeParams.query

    if (query) this.props.getSearchResult(query)
  }

  componentWillReceiveProps (nextProps) {
    let thisPropsQuery = this.props.routeParams.query
    let nextPropsQuery = nextProps.routeParams.query

    if (! nextPropsQuery) {
      nextProps.getSearchResult()
    } else if (thisPropsQuery !== nextPropsQuery && nextPropsQuery) {
      nextProps.getSearchResult(nextPropsQuery)
    }
  }

  render () {
    const { searchResults, routeParams } = this.props

    return (
      <SearchWrapper query={routeParams.query} searchResults={searchResults} />
    )
  }
}

SearchContainer.propTypes = {
  searchResults: PropTypes.object
}
