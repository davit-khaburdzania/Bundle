import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as bundleActions from '../../../actions/Bundle'
import * as searchActions from '../../../actions/Search'
import * as favoriteActions from '../../../actions/Favorite'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundles: state.Bundle.toJS().list,
  search: state.Search.toJS()
})

const connectProps = {
  ...bundleActions,
  ...searchActions,
  ...favoriteActions
}

@connect(connectState, connectProps)
export default class Container extends Component {
  constructor (props) {
    props.getBundles()
    super(props)
  }

  render () {
    return <Wrapper {...this.props} />
  }

  static propTypes = {
    bundles: PropTypes.array.isRequired,
    search: PropTypes.object.isRequired
  }
}
