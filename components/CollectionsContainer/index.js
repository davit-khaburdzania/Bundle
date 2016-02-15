import React, { Component } from 'react'

class CollectionsContainer extends Component {
  render () {
    return (
      <div className='collection-container'>
        <div className='top-nav'>
          <h2 className='title'> Collections </h2>
          <div className='nav'>
            <span className='ion-ios-albums icon'></span>
            <span className='ion-ios-search icon'></span>
          </div>
        </div>
      </div>
    )
  }
}

export { CollectionsContainer }
