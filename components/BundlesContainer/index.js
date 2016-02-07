import React, { Component } from 'react'
import { List, ListItem } from '../'

class BundlesContainer extends Component {
  render () {
    return (
      <div className='bundle-container'>
        <div className='top-nav'>
          <h2 className='title'>Bundles</h2>
          <div className='nav'>
            <span className='ion-ios-search icon'></span>
          </div>
        </div>

        <List>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </List>
      </div>
    )
  }
}

export { BundlesContainer }
