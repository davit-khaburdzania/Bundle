import React, { Component, PropTypes } from 'react'
import List from './../../components/List'
import Search from '../../components/Search'
import BundleListItem from './BundleListItem'

export default function BundleList ({
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
