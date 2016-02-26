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
  render () {
    let { isOpen, listChildren, openUserMenu, closeUserMenu } = this.props

    return (
      <div className='navigation-container'>
        <div className='menu-container'>
          <MainNavigation />

          <UserMenu
            isOpen={isOpen}
            openUserMenu={openUserMenu}
            closeUserMenu={closeUserMenu}
          >
            <Menu
              left={'70px'}
              bottom={'40px'}
              headline={'Julia Roberts'}
            >
              <Link to='/settings'>Settings</Link>
              <Link to='/logout'>Sign Out</Link>
            </Menu>
          </UserMenu>

        </div>

        <ResourceNavigation>
          {listChildren}
        </ResourceNavigation>
      </div>
    )
  }

  static propTypes: {
    isOpen: PropTypes.bool.isRequired,
    openUserMenu: PropTypes.func.isRequired,
    closeUserMenu: PropTypes.func.isRequired,
    listChildren: PropTypes.element.isRequired
  }
}
