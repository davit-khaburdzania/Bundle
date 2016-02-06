import React, { Component } from 'react'
import { ListContainer, NavigationContainer } from '../'

import './style.css'

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <NavigationContainer />
        <ListContainer>
          {this.props.children}
        </ListContainer>
      </div>
    )
  }
}

export { App }
