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
  constructor (props) {
    props.getBundle(props.params.bundle_id)
    super(props)
  }

  render () {
    const { bundle } = this.props

    if (!bundle) return false

    return <Wrapper bundle={bundle} />
  }
}
