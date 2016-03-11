import React from 'react'
import { Link } from 'react-router'
import { ResourceNavigation, List, ListItem, Search } from '../../../components'

import './wrapper.css'

export default function Wrapper ({
  bundles,
  search,
  children,
  removeBundle,
  renameBundle,
  editModeBundle,
  ...listItemProps
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
              <ListItem key={index} Component={ListItem.Bundle}
                {...bundle} {...listItemProps}
                url={'/bundles/' + bundle.id}
                type={'bundle'}
                edit={editModeBundle}
                rename={renameBundle}
                remove={removeBundle}
              />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
