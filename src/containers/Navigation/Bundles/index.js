import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as searchActions from '../../../actions/SearchContainer'
import Wrapper from './wrapper'

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
    let { bundles, search } = this.props
    let actions = {
      toggleSearchVisibility: this.props.toggleSearchVisibility,
      getSearchResult: this.props.getSearchResult
    }

    return (
      <Wrapper {...actions} search={search} bundles={bundles} />
    )
  }
}

BundleNavigationContainer.propTypes = {
  bundles: PropTypes.array,
  search: PropTypes.object,
  dispatch: PropTypes.func
}
