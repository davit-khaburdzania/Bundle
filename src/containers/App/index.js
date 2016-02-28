import React from 'react'
import {
  SideNavigation,
  ResourceNavigation,
  Alerts
} from '..'

import './style.css'

export default function App ({ children }) {
  return  (
    <div>
      <Alerts />
      <div className='application-container'>
        <SideNavigation/>
        <ResourceNavigation listChildren={children} />
      </div>
    </div>
  )
}
