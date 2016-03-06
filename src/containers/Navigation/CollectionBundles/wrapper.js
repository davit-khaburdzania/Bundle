import React, { Component, PropTypes } from 'react'
import {
  List,
  ListItem,
  ResourceNavigation
} from '../../../components'

function bundleUrl(collection, bundle) {
  return `/collections/${collection.id}/bundles/${bundle.id}`
}

export default function Wrapper ({
  collection,
  children
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
              <ListItem key={index} {...bundle} Component={ListItem.Bundle}
                url={bundleUrl(collection, bundle)}
              />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
