import React from 'react'
import { SideNavigation, Alerts } from '..'

import './style.css'

export default function App ({ children }) {
  return  (
    <div>
      <Alerts />
      <div className='application-container'>
        <SideNavigation />
        {children}
      </div>
    </div>
  )
}
