import React from 'react'
import { ResourceNavigation } from '../../../components'

export default function NotificationsContainer () {
  return (
    <div className='notifications-navigation'>
      <ResourceNavigation.Header>
        <div className='top-nav'>
          <h2 className='title'>Notifications</h2>
        </div>
      </ResourceNavigation.Header>
    </div>
  )
}
