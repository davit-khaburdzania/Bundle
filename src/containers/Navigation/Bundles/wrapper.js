import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { ResourceNavigation } from '../../../components'


import {
  List,
  ListItem,
  Search
} from '../../../components'

export default function Wrapper ({
  bundles,
  search,
  dispatch,
  toggleSearchVisibility,
  getSearchResult
}) {
  let styles = { 'display': search.open ? 'none' : 'block' }

  let currentListItems = search.result.length ? search.result : bundles

  return (
    <div className='bundles-navigation'>
      <ResourceNavigation.Header>
        <h2 style={styles} className='title'>Bundles</h2>
        <div className='nav'>
          <Link to='/search' className='icon ion-ios-search search-icon' />
        </div>
      </ResourceNavigation.Header>

      <ResourceNavigation.Body>
        <List>
          {currentListItems.map((bundle, index) =>
            <ListItem
              key={index}
              {...bundle}
              Component={ListItem.Bundle}
            />
          )}
        </List>
      </ResourceNavigation.Body>
    </div>
  )
}
