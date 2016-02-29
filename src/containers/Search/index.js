import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as searchActions from '../../actions/Search'

import SearchWrapper from './wrapper'

@connect(state => ({
  searchResults: state.Search.result
}),{
  ...searchActions
})

export default class SearchContainer extends Component {
  constructor (props) {
    super(props)
  }

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
    let { searchResults, routeParams } = this.props
    console.log(routeParams)

    if (! searchResults)  return false

    return (
      <SearchWrapper query={routeParams.query} searchResults={searchResults} />
    )
  }
}

SearchContainer.propTypes = {
  searchResults: PropTypes.object
}
