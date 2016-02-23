import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators as ba } from 'redux'
import * as bundleActions from '../../actions/Bundle'
import * as searchActions from '../../actions/SearchContainer'

import BundleList from './BundleList'

import './style.css'

@connect(
  state => ({
    bundles: state.Bundle.list,
    search: state.Search
  }), {
     ...bundleActions,
     ...searchActions
})
export default class BundleListContainer extends Component {
  constructor (props) {
    props.getBundles()
    super(props)
  }

  render () {
    let { bundles, search} = this.props
    let actions = {
      toggleSearchVisibility: this.props.toggleSearchVisibility,
      getSearchResult: this.props.getSearchResult
    }

    return (
      <BundleList {...actions} search={search} bundles={bundles} />
    )
  }
}

BundleListContainer.propTypes = {
  bundles: PropTypes.array,
  search: PropTypes.object,
  dispatch: PropTypes.func
}
