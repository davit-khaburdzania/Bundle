import React from 'react'
import { Link } from 'react-router'

import './style.css'

export default function MainNavigation () {
  return (
    <div className='main-navigation-container'>
      <div className='top-nav-list'>
        <Link to='/' className='logo'>B</Link>
        <Link to='/new' className='add-new-icon' />
      </div>

      <div className='main-nav-list'>
        <Link to='/bundles' className='ion-ios-paper nav-icon' />
        <Link to='/collections' className='ion-ios-albums nav-icon' />
        <Link to='/favorites' className='ion-star nav-icon' />
        <Link to='/notifications' className='ion-ios-bell nav-icon' />
      </div>
    </div>
  )
}
