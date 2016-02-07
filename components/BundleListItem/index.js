import React, { Component } from 'react'

class BundleListItem extends Component {
  render () {
    console.log(this.props)
    return (
      <div className='bundle-list-item'>
        this is bundle list item
      </div>
    )
  }
}

export { BundleListItem }
