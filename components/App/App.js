import React, { Component } from 'react'
import { Link, Route } from 'react-router'
import { ListContainer, NavigationContainer, CollectionsContainer } from '../'

import './style.css'

class App extends Component {
  render () {
    return (
      <div className="app-container">
        <NavigationContainer />
        <ListContainer>
          { this.props.children }
        </ListContainer>
      </div>
    )
  }
}

export { App }
