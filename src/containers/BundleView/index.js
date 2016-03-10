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
    const nextBundleId = nextProps.params.bundle_id

    if (params.bundle_id != nextBundleId) getBundle(nextBundleId)
  }

  render () {
    const { bundle } = this.props

    if (!bundle) return false

    return <Wrapper bundle={bundle} />
  }
}
