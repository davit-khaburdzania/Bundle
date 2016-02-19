import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators as ba } from 'redux'
import { connect } from 'react-redux'
import { MainNavigation, UserMenu, Menu } from '../'
import * as userMenuActions from '../../actions/UserMenu'

import './style.css'

class NavigationContainer extends Component {
  render () {
    let { isOpen, dispatch } = this.props
    let actions = ba(userMenuActions, dispatch)

    return (
      <div className='navigation-container'>
        <MainNavigation />

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

const ConnectedNavigationContainer =
  connect((state) => ({ isOpen: state.UserMenu }))(NavigationContainer)

export default ConnectedNavigationContainer
