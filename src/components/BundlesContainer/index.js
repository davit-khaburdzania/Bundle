import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators as ba } from 'redux'
import * as bundleActions from '../../actions/Bundle'
import * as SearchActions from '../../actions/SearchContainer'

import List from './../List'
import BundleListItem from './../BundleListItem'
import SearchContainer from './../SearchContainer'

import './style.css'

function BundleList ({
  bundles,
  search,
  dispatch,
  toggleSearchVisibility,
  getSearchResult
}) {

  let styles = { 'display': search.open ? 'none' : 'block' }

  let currentListItems = search.result.length ? search.result : bundles

  return (
    <div className='bundle-container'>
      <div className='top-nav'>
        <h2 style={styles} className='title'>Bundles</h2>
        <div className='nav'>
          <SearchContainer search={search.open}
           onClick={toggleSearchVisibility}
           onChange={getSearchResult}
          />
        </div>
      </div>

      <List>
        {currentListItems.map((bundle, index) =>
          <List.Item key={index}
            bundle={bundle}
            Component={BundleListItem}
          />
        )}
      </List>
    </div>
  )
}

class BundleListContainer extends Component {
  constructor (props) {
    props.dispatch(bundleActions.getBundles())

    super(props)
  }

  render () {
    let { bundles, search, dispatch } = this.props
    let boundActionCreators = ba(SearchActions, dispatch)

    return (
      <BundleList {...boundActionCreators} search={search} bundles={bundles} />
    )
  }
}

BundleListContainer.propTypes = {
  bundles: React.PropTypes.array,
  search: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

export default connect((state) => {
  return {
    bundles: state.Bundle.list,
    search: state.Search
  }
})(BundleListContainer)
