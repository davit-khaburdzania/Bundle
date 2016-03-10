import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as AddLinkActions from '../../actions/AddLink'
import { BundleView } from '../../components'

import './index.css'

const connectState = (state, props) => ({
  AddLink: state.AddLink[props.bundleId]
})

const connectProps = AddLinkActions

@connect(connectState, connectProps)
export default class BundleAddLink extends Component {

  handleKeyPress (e) {
    const url = e.target.value
    const { bundleId, fetchLink } =  this.props

    if (e.key == 'Enter') {
      fetchLink(url, bundleId)
    }
  }

  generateLink () {
    const { AddLink, bundleId } =  this.props

    const creator = {
      image: 'http://i.imgur.com/XMnLzi2.jpg',
      name: 'Sarah Gadon'
    }

    if (!AddLink || !AddLink.link) return false

    const link = {
      url: AddLink.link.url,
      title: AddLink.link.title,
      description: AddLink.link.description,
      image: AddLink.link.image,
      creator
    }

    return (
      <div>
        <BundleView.Link link={link} />
        <button className='add-link-button'>Add Link</button>
      </div>
    )
  }

  render () {
    const creator = {
      image: 'http://i.imgur.com/XMnLzi2.jpg',
      name: 'Sarah Gadon'
    }

    return (
      <div className='add-link'>
        <img className='creator-image' src={creator.image} />
        <input placeholder='Enter Url Here...' onKeyPress={this.handleKeyPress.bind(this)} />

        {this.generateLink()}
      </div>
    )
  }

  static propTypes = {
    bundleId: PropTypes.number
  }
}
