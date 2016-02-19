import React, { Component } from 'react'
import { bindActionCreators as ba } from 'redux'
import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'

import './style.css'

class ListContainer extends Component {
  render () {
    let { bundles, children, dispatch } = this.props
    children = React.cloneElement(children, {
      ...ba(bundleActions, dispatch)
    })

    return (
      <div className='list-container'>
        {children}
      </div>
    )
  }
}

const ConnectedListContainer =
  connect((state) => ({ bundles: state.Bundle.bundles }))(ListContainer)

export default ConnectedListContainer
