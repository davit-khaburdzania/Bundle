import React, { Component, PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'

import './index.css'

@listensToClickOutside()
export default class UserMenu extends Component {
  handleClickOutside () {
    this.props.isOpen && this.props.closeUserMenu()
  }

  render () {
    let { children, isOpen, openUserMenu, currentUser } = this.props

    return (
      <div className='user-menu'>
        { isOpen ? children : null }

        <div className='avatar-holder' onClick={openUserMenu}>
          <img src={currentUser.image} />
        </div>
      </div>
    )
  }

  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openUserMenu: PropTypes.func.isRequired,
    closeUserMenu: PropTypes.func.isRequired,
    children: PropTypes.element,
  }
}
