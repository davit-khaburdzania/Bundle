import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import SideNavigationTop from './top'
import SideNavigationBottom from './bottom'

import './index.css'

const connectState = state => ({
  isOpen: state.UserMenu
})

const connectProps = { ...userMenuActions }

@connect(connectState, connectProps)
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
