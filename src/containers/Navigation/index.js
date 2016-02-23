import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import Main from './Main'
import UserMenu from './../../components/UserMenu'
import Menu from './../../components/Menu'

import './index.css'

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
          <Main />

          <UserMenu toggleUserMenu= {toggleUserMenu}>
            <Menu left={'70px'} bottom={'40px'}
              headline={'Julia Roberts'}
              open={isOpen}
            >
              <Link to='/settings'>Settings</Link>
              <Link to='/logout'>Sign Out</Link>
            </Menu>
          </UserMenu>
        </div>

        <div className='list-container'>
          {listChildren}
        </div>
      </div>
    )
  }
}
