import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import Wrapper from './Wrapper'

const connectState = (state) => ({
  bundle: state.Bundle.toJS().current
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleViewContainer extends Component {
  componentWillMount () {
    const { getBundle, params } = this.props
    getBundle(params.bundle_id)
  }

  componentWillReceiveProps (nextProps) {
    const { getBundle, params } = this.props
    const nextBundleId = nextProps.params.bundle_id

    if (params.bundle_id !== nextBundleId) getBundle(nextBundleId)
  }

  linksWithoutAuthors (links) {
    return links.map(link => {
      let newLink = { ...link }
      delete newLink.creator
      return newLink
    })
  }

  handleLinkRemove (index) {
    const { bundle, updateBundle } = this.props
    bundle.links[index]['_destroy'] = true

    const payload = {
      name: bundle.name,
      description: bundle.description,
      links_attributes: this.linksWithoutAuthors(bundle.links)
    }

    updateBundle(bundle.id, payload)
  }

  toggleEdit (save) {
    const { toggleEditMode, bundle, updateBundle } = this.props

    if (!save) return toggleEditMode()

    const payload = {
      name: bundle.name,
      description: bundle.description,
      links_attributes: this.linksWithoutAuthors(bundle.links)
    }

    updateBundle(bundle.id, payload)
    toggleEditMode()
  }

  render () {
    const { bundle, updateBundleInfo, updateBundleLink } = this.props

    if (!bundle) return false

    return <Wrapper editMode={bundle.editMode} bundle={bundle}
      handleChange={updateBundleInfo}
      handleLinkEdit={updateBundleLink}
      handleLinkRemove={this.handleLinkRemove.bind(this)}
      toggleEdit={this.toggleEdit.bind(this)} />
  }
}
