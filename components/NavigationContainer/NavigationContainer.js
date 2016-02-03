import React, { Component } from 'react'
import { Link } from 'react-router'
import { MainNavigation } from '../'

import './style.css'

class NavigationContainer extends Component {
  render () {
    return (
      <div className="navigation-container">
        <MainNavigation />
      </div>
    )
  }
}

export { NavigationContainer }
