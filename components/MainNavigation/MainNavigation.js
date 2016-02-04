import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'

class MainNavigation extends Component {
  render () {
    return (
      <div className="main-navigation-container">
        <ul className="top-nav-list">
          <li><Link to="/" className="logo"> B </Link></li>
          <li><Link to="/new" className="add-new-icon"></Link></li>
        </ul>
        <ul className="main-nav-list">
          <li><Link to="/bundles" params={ {id: 'bundles'} } className="ion-ios-paper nav-icon"></Link></li>
          <li><Link to="/collections" className="ion-ios-albums nav-icon"></Link></li>
          <li><Link to="/favorites" className="ion-star nav-icon"></Link></li>
          <li><Link to="/notifications" className="ion-ios-bell nav-icon"></Link></li>
        </ul>
      </div>
    )
  }
}

export { MainNavigation }
