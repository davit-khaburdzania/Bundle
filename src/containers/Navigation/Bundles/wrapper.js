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
  children,
  favorite,
  unfavorite,
  removeBundle
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
              <ListItem key={index} {...bundle} Component={ListItem.Bundle}
                url={'/bundles/' + bundle.id}
                type={'bundle'}
                id={bundle.id}
                isFavorited={bundle.favorited}
                favorite={favorite}
                unfavorite={unfavorite}
                remove={removeBundle}
              />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
