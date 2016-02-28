import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userMenuActions from '../../actions/UserMenu'

import { SideNavigation } from '../../components'

const connect_state = state => ({
  isOpen: state.UserMenu
})

const connect_props = { ...userMenuActions }

@connect(connect_state, connect_props)
export default class Navigation extends Component {
  render () {
    let { isOpen, toggleUserMenu } = this.props

    return (
      <SideNavigation isOpen={isOpen} toggleUserMenu={toggleUserMenu} />
    )
  }
}
