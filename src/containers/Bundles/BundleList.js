import React, { Component, PropTypes } from 'react'
import BundleListItem from './BundleListItem'
import {
  List,
  ListItem,
  Search
} from '../../components'

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
          <ListItem key={index}
            {...bundle}
            Component={BundleListItem}
          />
        )}
      </List>
    </div>
  )
}
