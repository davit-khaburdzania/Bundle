import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import 'react-router'
import * as searchActions from '../../actions/SearchContainer'

import SearchWrapper from './components/SearchWrapper'

@connect(state => ({
  search: state.Search
}),{
  ...searchActions
})

export default class SearchContainer extends Component {
  constructor (props) {
    let query = props.routeParams.query
    props.getSearchResult(query)


    super(props)
  }

  componentDidMount () {
    console.log("did mount")
  }

  componentWillReceiveProps (nextProps) {
    let thisPropsQuery = this.props.routeParams.query
    let nextPropsQuery = nextProps.routeParams.query

    if (thisPropsQuery !== nextPropsQuery) {
      nextProps.getSearchResult(nextPropsQuery)
    }

    // if ()
    // console.log(thisPropsQuery)
    // console.log(nextPropsQuery)

  }

  //
  // shouldComponentUpdate (nextProps, nextState) {
  //   let diff = nextProps.params.query !== this.props.params.query
  //   console.log(diff)
  //   return diff
  // }


  // componentDidMount() {

  // }

  render () {
    return (
      <SearchWrapper />
    )
  }
}

SearchContainer.propTypes = {
  search: PropTypes.object
}
