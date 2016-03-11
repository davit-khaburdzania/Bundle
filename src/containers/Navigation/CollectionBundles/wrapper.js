import React, { Component, PropTypes } from 'react'
import { ResourceNavigation, List, ListItem } from '../../../components'

function bundleUrl(collection, bundle) {
  return `/collections/${collection.id}/bundles/${bundle.id}`
}

export default function Wrapper ({
  collection,
  children,
  removeBundle,
  renameBundle,
  editModeBundle,
  ...listItemProps
}) {
  return (
    <ResourceNavigation bundleView={children}>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 className='title'>{collection.name}</h2>
          <div className='nav'>
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {collection.bundles.map((bundle, index) =>
              <ListItem key={index} j Component={ListItem.Bundle}
                {...bundle} {...listItemProps}
                url={bundleUrl(collection, bundle)}
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
