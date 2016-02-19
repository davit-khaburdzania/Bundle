import React from 'react'
import { ListContainer, NavigationContainer } from '../'

import './style.css'

export default function App ({ children }) {
  return (
    <div className='app-container'>
      <NavigationContainer />
      <ListContainer>
        {children}
      </ListContainer>
    </div>
  )
}
