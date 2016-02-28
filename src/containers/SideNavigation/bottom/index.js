import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu, UserMenu } from '../../../components'

export default function SideNavigationBottom ({
  isOpen,
  toggleUserMenu
}) {
  return (
    <div className='side-navigation-bottom'>
      <UserMenu toggleUserMenu={toggleUserMenu}>
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
