import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundle: state.Bundle.current
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleViewContainer extends Component {
  componentWillMount() {
    const { getBundle, params } = this.props
    getBundle(params.bundle_id)
  }

  componentWillReceiveProps (nextProps) {
    const { getBundle, params } = this.props

    if (params.bundle_id != nextProps.params.bundle_id) {
      console.log('viri')
      getBundle(params.bundle_id)
    }
  }

  render () {
    const { bundle } = this.props

    if (!bundle) return false

    return <Wrapper bundle={bundle} />
  }
}
