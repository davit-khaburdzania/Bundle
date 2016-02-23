import React from 'react'
import Navigation from './../../containers/Navigation'

import './style.css'

export default function App ({ children }) {
  return <Navigation listChildren={children} />
}
