import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

export default function SideNavigationTop () {
  return (
    <div className='side-navigation-top'>
      <div className='top-nav-list'>
        <Link to='/' className='logo'>B</Link>
        <Link to='/new' className='add-new-icon' />
      </div>

      <div className='main-nav-list'>
        <Link to='/bundles' className='nav-icon nav-icon-bundles' />
        <Link to='/collections' className='nav-icon nav-icon-collections' />
        <Link to='/favorites' className='nav-icon nav-icon-favorites' />
        <Link to='/notifications' className='nav-icon nav-icon-notifications' />
      </div>
    </div>
  )
}
