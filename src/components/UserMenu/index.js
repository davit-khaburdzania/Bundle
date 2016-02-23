import React, { PropTypes } from 'react'

import './index.css'

export default function UserMenu ({
  children,
  toggleUserMenu
}) {
  return (
    <div className='user-menu'>
      {children}

      <div className='avatar-holder' onClick={toggleUserMenu}>
        <img src='/assets/images/avatar.png' />
      </div>
    </div>
  )
}

UserMenu.propTypes = {
  toggleUserMenu: PropTypes.func,
  children: React.PropTypes.element
}
