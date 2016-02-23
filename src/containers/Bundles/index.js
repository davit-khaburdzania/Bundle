import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators as ba } from 'redux'
import * as bundleActions from '../../actions/Bundle'
import * as SearchActions from '../../actions/SearchContainer'

import List from './../../components/List'
import BundleListItem from './../../components/BundleListItem'
import { Search } from '../'

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
          <Search search={search.open}
           onClick={toggleSearchVisibility}
           onChange={getSearchResult}
          />
        </div>
      </div>

      <List>
        {currentListItems.map((bundle, index) =>
          <List.Item key={index}
            {...bundle}
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
  bundles: PropTypes.array,
  search: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect((state) => {
  return {
    bundles: state.Bundle.list,
    search: state.Search
  }
})(BundleListContainer)
