import React from 'react'
import { ResourceNavigation } from '../../../components'

import {
  List,
  ListItem
} from '../../../components'

export default function Wrapper ({
  collections,
  removeCollection,
  ...listItemProps
}) {
  return (
    <ResourceNavigation>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 className='title'>Collections</h2>
          <div className='nav'>
            <span className='ion-ios-albums icon'></span>
            <span className='ion-ios-search icon'></span>
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {collections.map((collection, index) =>
              <ListItem key={index} Component={ListItem.Collection}
                {...collection} {...listItemProps}
                type={'collection'}
                remove={removeCollection}
              />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
