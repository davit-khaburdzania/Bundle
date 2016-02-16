import React, { Component } from 'react'
import { bindActionCreators as ba } from 'redux'
import { connect } from 'react-redux'
import * as SearchActions from '../../actions/SearchContainer'

import { SearchContainer } from '../'

import './style.css'

class BundlesContainer extends Component {
  render () {
    let { search, dispatch } = this.props
    let actions = ba(SearchActions, dispatch)
    let styles = { display: !search ? 'block' : 'none' }

    return (
      <div className='bundle-container'>
        <div className='top-nav'>
          <h2 style={styles} className='title'> Bundles </h2>
          <div className='nav'>
            <SearchContainer search={search}
              onClick={actions.toggleSearchVisibility}
              onChange={actions.getSearchResult} />
          </div>
        </div>
      </div>
    )
  }
}

BundlesContainer.propTypes = {
  dispatch: React.PropTypes.func,
  search: React.PropTypes.bool
}

const ConnectedBundlesContainer =
  connect((state) => ({ search: state.Search }))(BundlesContainer)

export { ConnectedBundlesContainer as BundlesContainer }
