import React from 'react'
import { ResourceNavigation } from '../../../components'

export default function FavoritesContainer () {
  return (
    <div className='favorites-navigation'>
      <ResourceNavigation.Header>
        <div className='top-nav'>
          <h2 className='title'>Favorites</h2>
        </div>
      </ResourceNavigation.Header>
    </div>
  )
}
