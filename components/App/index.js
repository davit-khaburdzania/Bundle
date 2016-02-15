import React, { Component } from 'react'
import { ListContainer, NavigationContainer } from '../'

import './style.css'

class App extends Component {
  render () {
    let { children } = this.props

    return (
      <div className='app-container'>
        <NavigationContainer />
        <ListContainer>
          {children}
        </ListContainer>
      </div>
    )
  }
}

export { App }
