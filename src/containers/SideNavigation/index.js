import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import SideNavigationTop from './top'
import SideNavigationBottom from './bottom'

import './index.css'

const connect_state = state => ({
  isOpen: state.UserMenu
})

const connect_props = { ...userMenuActions }

@connect(connect_state, connect_props)
export default class SideNavigation extends Component {
  render () {
    let { isOpen, openUserMenu, closeUserMenu } = this.props

    return (
      <div className='side-navigation'>
        <SideNavigationTop/>
        <SideNavigationBottom isOpen={isOpen} openUserMenu={openUserMenu}
          closeUserMenu={closeUserMenu}
        />
      </div>
    )
  }
}
