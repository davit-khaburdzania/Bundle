import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as BundleActions from '../../actions/Bundle'
import { BundleView } from '../../components'

import './index.css'

const connectState = (state) => ({
  currentBundle: state.Bundle.current,
  currentUser: state.User.me
})

const connectProps = BundleActions

@connect(connectState, connectProps)
export default class BundleAddLink extends Component {

  handleKeyPress (e) {
    const url = e.target.value
    const { bundleId, fetchLink } =  this.props

    if (e.key == 'Enter') {
      fetchLink(url, bundleId)
    }
  }

  addLinkClick (link) {
    const { currentUser, currentBundle, AddLink } = this.props
    const payload= { ...this.parseLink(link), creator_id: currentUser.id }

    AddLink(currentBundle.id, payload)
  }

  parseLink (link) {
    return {
      url: link.url,
      title: link.title,
      description: link.description,
      image: link.image,
    }
  }

  generateLink () {
    const { currentBundle, currentUser } =  this.props

    if (!currentBundle || !currentBundle.link) return false

    const link = this.parseLink(currentBundle.link)
    link.creator = currentUser

    return (
      <div>
        <BundleView.Link link={link} />
        <button className='add-link-button' onClick={this.addLinkClick.bind(this, link)}>Add Link</button>
      </div>
    )
  }

  generateAddLink () {
    const { currentUser, currentBundle } = this.props

    if (currentBundle.link) return false

    return (
      <div className='add-link'>
        <img className='creator-image' src={currentUser.image} />
        <input className='url-input' placeholder='Enter Url Here...'
          onKeyPress={this.handleKeyPress.bind(this)} />
      </div>
    )
  }

  render () {
    return (
      <div className='add-link-container'>
        {this.generateAddLink()}
        {this.generateLink()}
      </div>
    )
  }
}
