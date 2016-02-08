import React, { Component } from 'react'

class BundleListItem extends Component {
  render () {
    let { bundle } = this.props

    return (
      <div className='bundle-list-item'>
        {bundle.name}
      </div>
    )
  }
}

export { BundleListItem }
