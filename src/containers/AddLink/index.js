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
    const { currentUser, currentBundle, fetchLink } = this.props
    const link = currentBundle.link

    if (link) {
      return <LinkPreview currentUser={currentUser} link={link}
        addLinkHandler={this.addLinkHandler.bind(this)} />
    } else {
      return <EnterUrl image={currentUser.image} bundleId={currentBundle.id}
        handeUrlEnter={fetchLink} />
    }
  }
}
