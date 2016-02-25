import React, { Component, PropTypes } from 'react'
import { ResourceNavigation } from '../../../components'

import {
  List,
  ListItem
} from '../../../components'

export default function Wrapper ({
  collection
}) {
  return (
    <div className='bundles-navigation'>
      <ResourceNavigation.Header>
        <h2 className='title'>{collection.name}</h2>
        <div className='nav'>
        </div>
      </ResourceNavigation.Header>

      <ResourceNavigation.Body>
        <List>
          {collection.bundles.map((bundle, index) =>
            <ListItem key={index}
              {...bundle}
              Component={ListItem.Bundle}
            />
          )}
        </List>
      </ResourceNavigation.Body>
    </div>
  )
}
