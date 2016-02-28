import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu, UserMenu } from '../../../components'

export default function SideNavigationBottom ({
  isOpen,
  openUserMenu,
  closeUserMenu
}) {
  return (
    <div className='side-navigation-bottom'>
      <UserMenu isOpen={isOpen} openUserMenu={openUserMenu}
        closeUserMenu={closeUserMenu} >

        <Menu left={'70px'} bottom={'40px'} headline={'Julia Roberts'}>
          <Link to='/settings'>Settings</Link>
          <Link to='/logout'>Sign Out</Link>
        </Menu>
      </UserMenu>
    </div>
  )
}
SideNavigationBottom.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openUserMenu: PropTypes.func.isRequired,
  closeUserMenu: PropTypes.func.isRequired
}
