import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import {
  MainNavigation,
  ResourceNavigation
} from '../../components'

import './index.css'

import {
  Menu,
  UserMenu
} from '../../components'

@connect(state => ({
  isOpen: state.UserMenu
}), {
  ...userMenuActions
})
export default class Navigation extends Component {
  render () {
    let { isOpen, listChildren, toggleUserMenu } = this.props

    return (
      <div className='navigation-container'>
        <div className='menu-container'>
          <MainNavigation />

          <UserMenu toggleUserMenu={toggleUserMenu}>
            <Menu left={'70px'} bottom={'40px'}
              headline={'Julia Roberts'}
              open={isOpen}
            >
              <Link to='/settings'>Settings</Link>
              <Link to='/logout'>Sign Out</Link>
            </Menu>
          </UserMenu>
        </div>
        {listChildren}
      </div>
    )
  }
}
