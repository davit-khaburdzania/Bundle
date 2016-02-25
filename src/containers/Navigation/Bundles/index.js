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
    let props = this.props

    return (
      <Wrapper
        toggleSearchVisibility={props.toggleSearchVisibility}
        getSearchResult={props.getSearchResult}
        search={props.search}
        bundles={props.bundles}
      />
    )
  }
}

BundleNavigationContainer.propTypes = {
  bundles: PropTypes.array,
  search: PropTypes.object,
  dispatch: PropTypes.func
}
