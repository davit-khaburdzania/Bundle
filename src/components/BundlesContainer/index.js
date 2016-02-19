import React, { Component } from 'react'
import { bindActionCreators as bac } from 'redux'
import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'

import List from './../List'
import ListItem from './../ListItem'
import BundleListItem from './../BundleListItem'

function BundleList ({ bundles }) {
  return (
    <div className='bundle-container'>
      <div className='top-nav'>
        <h2 className='title'>Bundles</h2>
        <div className='nav'>
          <span className='ion-ios-search icon'></span>
        </div>
      </div>

      <List>
        {bundles.map((bundle, index) =>
          <ListItem key={index}
            bundle={bundle}
            Component={BundleListItem}
          />
        )}
      </List>
    </div>
  )
}

class BundleListContainer extends Component {
  constructor(props) {
    props.dispatch(bundleActions.getBundles())

    super(props)
  }

  render () {
    let { bundles } = this.props
    return (
      <BundleList bundles={bundles} />
    )
  }
}

export default connect((state) =>
  ({ bundles: state.Bundle.list }))(BundleListContainer)
