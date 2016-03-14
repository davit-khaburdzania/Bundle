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

  handleLinkEdit (id, field, value) {
    const { updateBundleLink } = this.props

    updateBundleLink(id, field, value)

  }

  handleChange (field, value) {
    updateBundleState(field, value)
  }

  toggleEdit (save) {
    console.log("save ? ", save)
    const { toggleEditMode, bundle, updateBundle } = this.props

    if (save) {
      const payload = {
        name: bundle.name,
        description: bundle.description,
        links_attributes: bundle.links.map(link => {
          let newLink = {...link}
          delete newLink.creator
          return newLink
        })
      }
      
      updateBundle(bundle.id, payload)
      toggleEditMode()
    } else {
      toggleEditMode()
    }
  }

  render () {
    const { bundle, updateBundleState } = this.props

    if (!bundle) return false

    return <Wrapper editMode={bundle.editMode} bundle={bundle}
      handleChange={updateBundleState}
      handleLinkEdit={this.handleLinkEdit.bind(this)}
      toggleEdit={this.toggleEdit.bind(this)} />
  }
}
