import React from 'react'
import { ResourceNavigation } from '../../../components'

export default function CollectionsContainer () {
  return (
    <div className='collections-navigation'>
      <ResourceNavigation.Header>
        <h2 className='title'>Collections</h2>
        <div className='nav'>
          <span className='ion-ios-albums icon'></span>
          <span className='ion-ios-search icon'></span>
        </div>
      </ResourceNavigation.Header>
    </div>
  )
}
