import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import MainNavigation from './MainNavigation'
import { ResourceNavigation } from '../../components'

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
  renderUserMenu () {
    let { closeUserMenu } = this.props

    return (
      <Menu
        left={'70px'}
        bottom={'40px'}
        headline={'Julia Roberts'}
        closeUserMenu={closeUserMenu}
      >
        <Link to='/settings'>Settings</Link>
        <Link to='/logout'>Sign Out</Link>
      </Menu>
    )
  }

  render () {
    let { isOpen, listChildren, openUserMenu } = this.props

    return (
      <div className='navigation-container'>
        <div className='menu-container'>
          <MainNavigation />

          <UserMenu openUserMenu={openUserMenu}>
            { isOpen ? this.renderUserMenu() : null }
          </UserMenu>

        </div>

        <ResourceNavigation>
          {listChildren}
        </ResourceNavigation>
      </div>
    )
  }
}
