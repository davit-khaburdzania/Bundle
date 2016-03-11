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

  handleDesctiptionChange (value, field) {
    const { changeDescriptionInCurrentBundle } = this.props

    changeDescriptionInCurrentBundle(value, field)
  }

  toggleEditMode () {
    const { toggleEditMode } = this.props
    toggleEditMode()
  }

  render () {
    const { bundle } = this.props

    if (!bundle) return false

    return <Wrapper editMode={bundle.editMode}
      toggleEditMode={this.toggleEditMode.bind(this)} handleDesctiptionChange={this.handleDesctiptionChange.bind(this)}
      bundle={bundle} />
  }
}
