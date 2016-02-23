import React from 'react'
import Navigation from './../../components/Navigation'

import './style.css'

export default function App ({ children }) {
  return <Navigation listChildren={children} />
}
