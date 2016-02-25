import React from 'react'
import { Navigation, Alerts } from '..'

import './style.css'

export default function App ({ children }) {
  return  (
    <div>
      <Alerts />
      <Navigation listChildren={children} />
    </div>
  )
}
