import React, { Component, PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'

import './index.css'

@listensToClickOutside()
export default class UserMenu extends Component {
  handleClickOutside () {
    this.props.isOpen && this.props.closeUserMenu()
  }

  render () {
    let { children, isOpen, openUserMenu } = this.props

    return (
      <div className='user-menu'>
        { isOpen ? children : null }

        <div className='avatar-holder' onClick={openUserMenu}>
          <img src='/assets/images/avatar.png' />
        </div>
      </div>
    )
  }

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openUserMenu: PropTypes.func.isRequired,
    closeUserMenu: PropTypes.func.isRequired,
    children: PropTypes.element,
  }
}
