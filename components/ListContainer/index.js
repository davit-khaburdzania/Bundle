import React, { Component } from 'react'
import { bindActionCreators as ba } from 'redux'
import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import * as searchActions from '../../actions/SearchContainer'

import './style.css'

class ListContainer extends Component {
  render () {
    let { bundles, searchResult, children, dispatch } = this.props
    children = React.cloneElement(children, {
      ...ba(bundleActions, searchActions, dispatch)
    })

    return (
      <div className='list-container'>
        {children}
      </div>
    )
  }
}

ListContainer.propTypes = {
  dispatch: React.PropTypes.func,
  searchResult: React.PropTypes.array,
  bundles: React.PropTypes.array,
  children: React.PropTypes.object
}

const ConnectedListContainer =
  connect((state) => ({
    bundles: state.Bundle.bundles,
    searchResult: state.Search.result
  }))(ListContainer)

export { ConnectedListContainer as ListContainer }
