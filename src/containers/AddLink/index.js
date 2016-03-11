import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as BundleActions from '../../actions/Bundle'
import { BundleView } from '../../components'
import EnterUrl from './EnterUrl'

import './index.css'

const connectState = (state) => ({
  currentBundle: state.Bundle.current,
  currentUser: state.User.me
})

const connectProps = BundleActions

@connect(connectState, connectProps)
export default class BundleAddLink extends Component {

  handeUrlEnter (e) {
    const url = e.target.value
    const { bundleId, fetchLink } =  this.props

    if (e.key == 'Enter') {
      fetchLink(url, bundleId)
    }
  }

  addLinkClick (link) {
    const { currentUser, currentBundle, UpdateBundle } = this.props
    const payload= {
      links_attributes: [{
        ...this.parseLink(link),
        creator_id: currentUser.id
      }]
    }

    UpdateBundle(currentBundle.id, payload)
  }

  parseLink (link) {
    return {
      url: link.url,
      title: link.title,
      description: link.description,
      image: link.image,
    }
  }

  generatePreviewLink () {
    const { currentBundle, currentUser } =  this.props

    if (!currentBundle || !currentBundle.link) return false

    const link = this.parseLink(currentBundle.link)
    link.creator = currentUser

    return (
      <div className='add-link-preview'>
        <BundleView.Link link={link} />
        <button className='add-link-button' onClick={this.addLinkClick.bind(this, link)}>Add Link</button>
      </div>
    )
  }

  render () {
    const { currentUser, currentBundle } = this.props

    return (
      <div className='add-link-container'>
        <EnterUrl image={currentUser.image} linkPreview={currentBundle.link}
          handeUrlEnter={this.handeUrlEnter.bind(this)} />
        {this.generatePreviewLink()}
      </div>
    )
  }
}
