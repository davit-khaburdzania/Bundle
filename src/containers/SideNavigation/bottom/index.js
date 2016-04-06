import { Link } from 'react-router'
import { Menu, UserMenu } from '../../../components'

export default function SideNavigationBottom ({
  isOpen,
  openUserMenu,
  closeUserMenu,
  currentUser
}) {
  return (
    <div className='side-navigation-bottom'>
      <UserMenu isOpen={isOpen} openUserMenu={openUserMenu}
        closeUserMenu={closeUserMenu} currentUser={currentUser} >

        <Menu left={'70px'} bottom={'40px'} headline={currentUser.name}>
          <Link to='/settings'>Settings</Link>
          <Link to='/logout'>Sign Out</Link>
        </Menu>
      </UserMenu>
    </div>
  )
}
SideNavigationBottom.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
  isOpen: React.PropTypes.bool.isRequired,
  openUserMenu: React.PropTypes.func.isRequired,
  closeUserMenu: React.PropTypes.func.isRequired
}
