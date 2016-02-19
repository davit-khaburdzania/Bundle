import React, { Component } from 'react'
import { List, ListItem, BundleListItem } from '../'

export default class BundlesContainer extends Component {
  renderBundle (bundle, index) {
    return <ListItem key={index} bundle={bundle} Component={BundleListItem} />
  }

  render () {
    let { bundles } = this.props

    return (
      <div className='bundle-container'>
        <div className='top-nav'>
          <h2 className='title'>Bundles</h2>
          <div className='nav'>
            <span className='ion-ios-search icon'></span>
          </div>
        </div>

        <List>
          test
        </List>
      </div>
    )
  }
}
