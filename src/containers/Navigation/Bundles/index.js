import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as searchActions from '../../../actions/SearchContainer'
import Wrapper from './Wrapper'

import './index.css'

@connect(state => ({
  bundles: state.Bundle.list,
  search: state.Search
}), {
   ...bundleActions,
   ...searchActions
})
export default class BundleNavigationContainer extends Component {
  constructor (props) {
    props.getBundles()
    super(props)
  }

  render () {
    return (
      <Wrapper
        toggleSearchVisibility={this.props.toggleSearchVisibility}
        getSearchResult={this.props.getSearchResult}
        search={this.props.search}
        bundles={this.props.bundles}
      />
    )
  }
}

BundleNavigationContainer.propTypes = {
  bundles: PropTypes.array,
  search: PropTypes.object,
  dispatch: PropTypes.func
}
