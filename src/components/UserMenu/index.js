import React from 'react'

import './style.css'

export default function UserMenu ({ children, toggleUserMenu }) {
  return (
    <div className='user-menu'>
      {children}

      <div className='avatar-holder' onClick={toggleUserMenu}>
        <img src='/assets/images/avatar.png' />
      </div>
    </div>
  )
}
