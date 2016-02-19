import React from 'react'
import ListContainer from './../ListContainer'
import NavigationContainer from './../NavigationContainer'

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
