import React, { Component, PropTypes } from 'react'

import './index.css'

export default class BundleAddLink extends Component {
  handleKeyPress (e) {
    const url = e.target.value

    if (e.key == 'Enter') {
      console.log(url)
    }
  }

  render () {
    const { creator, bundleId } =  this.props

    return (
      <div className='add-link'>
        <img className='creator-image' src={creator.image} />
        <input placeholder='Enter Url Here...' onKeyPress={this.handleKeyPress} />
      </div>
    )
  }

  static propTypes = {
    creator: PropTypes.object,
    bundleId: PropTypes.number
  }
}
