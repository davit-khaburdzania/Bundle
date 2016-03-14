import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as BundleActions from '../../actions/Bundle'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

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

  addLinkHandler (link) {
    const { currentUser, currentBundle, updateBundle } = this.props
    const payload= {
      links_attributes: [{
        ...link,
        creator_id: currentUser.id
      }]
    }

    updateBundle(currentBundle.id, payload)
  }

  render () {
    const { currentUser, currentBundle } = this.props
    const link = currentBundle.link

    if (link) {
      return <LinkPreview currentUser={currentUser} link={link}
        addLinkHandler={this.addLinkHandler.bind(this)} />
    } else {
      return <EnterUrl image={currentUser.image}
        handeUrlEnter={this.handeUrlEnter.bind(this)} />
    }
  }
}
