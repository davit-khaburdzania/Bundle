import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as searchActions from '../../../actions/SearchContainer'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundles: state.Bundle.list,
  search: state.Search
})

const connectProps = {
  ...bundleActions,
  ...searchActions
}

@connect(connectState, connectProps)
export default class Container extends Component {
  constructor (props) {
    props.getBundles()
    super(props)
  }

  render () {
    const props = this.props

    return (
      <Wrapper
        toggleSearchVisibility={props.toggleSearchVisibility}
        getSearchResult={props.getSearchResult}
        search={props.search}
        bundles={props.bundles}
        children={props.children}
      />
    )
  }

  static propTypes = {
    bundles: PropTypes.array.isRequired,
    search: PropTypes.object.isRequired
  }
}
