import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as searchActions from '../../actions/Search'

import SearchWrapper from './wrapper'

const connectState = (state) => ({ searchResults: state.Search.result })
const connectProps = { ...searchActions }

@connect(connectState, connectProps)
export default class SearchContainer extends Component {
  componentWillMount () {
    let query = this.props.routeParams.query

    this.props.getSearchResult(query)
  }

  componentWillReceiveProps (nextProps) {
    let thisPropsQuery = this.props.routeParams.query
    let nextPropsQuery = nextProps.routeParams.query

    if (thisPropsQuery !== nextPropsQuery) {
      nextProps.getSearchResult(nextPropsQuery)
    }
  }

  render () {
    const { searchResults, routeParams } = this.props

    if (! searchResults) return false

    return (
      <SearchWrapper query={routeParams.query} searchResults={searchResults} />
    )
  }
}

SearchContainer.propTypes = {
  searchResults: PropTypes.object
}
