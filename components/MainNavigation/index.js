import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'

class MainNavigation extends Component {
  render () {
    return (
      <div className="main-navigation-container">
        <div className="top-nav-list">
          <li><Link to="/" className="logo"> B </Link></li>
          <li><Link to="/new" className="add-new-icon"></Link></li>
        </div>
        <div className="main-nav-list">
          <Link to="/bundles" className="ion-ios-paper nav-icon"></Link>
          <Link to="/collections" className="ion-ios-albums nav-icon"></Link>
          <Link to="/favorites" className="ion-star nav-icon"></Link>
          <Link to="/notifications" className="ion-ios-bell nav-icon"></Link>
        </div>
      </div>
    )
  }
}

export { MainNavigation }