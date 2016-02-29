import React from 'react'
import { ResourceNavigation } from '../../../components'

export default function Container () {
  return (
    <ResourceNavigation>
      <div className='favorites-navigation'>
        <ResourceNavigation.Header>
          <div className='top-nav'>
            <h2 className='title'>Favorites</h2>
          </div>
        </ResourceNavigation.Header>
      </div>
    </ResourceNavigation>
  )
}
