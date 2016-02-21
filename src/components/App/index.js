import React from 'react'
import Navigation from './../Navigation'

import './style.css'

export default function App ({ children }) {
  return <Navigation listChildren={children} />
}
