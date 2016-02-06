import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { MainNavigation, UserMenu, Menu } from '../'
import * as userMenuActions from '../../actions/UserMenu'

import './style.css'

class NavigationContainer extends Component {
  render () {
    let { isOpen, dispatch } = this.props

    return (
      <div className='navigation-container'>
        <MainNavigation />

        <UserMenu { ...bindActionCreators(userMenuActions, dispatch) }>
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

export { ConnectedNavigationContainer as NavigationContainer }
