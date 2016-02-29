import React from 'react'
import { ResourceNavigation } from '../../../components'
import { Link } from 'react-router'

import {
  List,
  ListItem,
  Search
} from '../../../components'

import './wrapper.css'

export default function Wrapper ({
  bundles,
  search,
  dispatch,
  toggleSearchVisibility,
  getSearchResult,
  children
}) {
  let styles = { 'display': search.open ? 'none' : 'block' }

  return (
    <ResourceNavigation bundleView={children}>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 style={styles} className='title'>Bundles</h2>
          <div className='nav'>
            <Link to='/search' className='icon ion-ios-search search-icon' />
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {bundles.map((bundle, index) =>
              <ListItem key={index} {...bundle} Component={ListItem.Bundle} />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
