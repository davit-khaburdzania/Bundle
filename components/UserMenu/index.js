import React, { Component } from 'react'

import './style.css'

class UserMenu extends Component {
  render () {
    let { children, toggleUserMenu } = this.props

    return (
      <div className='user-menu'>
        {children}

        <div className='avatar-holder' onClick={toggleUserMenu}>
          <img src='/assets/images/avatar.png' />
        </div>
      </div>
    )
  }
}

export { UserMenu }
