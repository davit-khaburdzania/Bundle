import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators as ba } from 'redux'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import Main from './Main'
import UserMenu from './../UserMenu'
import Menu from './../Menu'

import './style.css'

class Navigation extends Component {
  render () {
    let { isOpen, dispatch } = this.props
    let actions = ba(userMenuActions, dispatch)

    return (
      <div className='navigation-container'>
        <Navigation.Main />

        <UserMenu { ...actions }>
          <Menu left={'70px'} bottom={'40px'}
            headline={'Julia Roberts'}
            open={isOpen}
          >
            <Link to='/settings'>Settings</Link>
            <Link to='/logout'>Sign Out</Link>
          </Menu>
        </UserMenu>
      </div>
    )
  }
}

Navigation.Main = Main

export default connect((state) =>
  ({ isOpen: state.UserMenu }))(Navigation)
