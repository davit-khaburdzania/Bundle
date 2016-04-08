import listensToClickOutside from 'react-onclickoutside/decorator'

import './index.css'

@listensToClickOutside()
export default class UserMenu extends React.Component {
  handleClickOutside () {
    this.props.isOpen && this.props.closeUserMenu()
  }

  render () {
    let { children, isOpen, openUserMenu, currentUser } = this.props

    return (
      <div className='user-menu'>
        {isOpen ? children : null}

        <div className='avatar-holder' onClick={openUserMenu}>
          <img src={currentUser.image} />
        </div>
      </div>
    )
  }

  static propTypes = {
    currentUser: React.PropTypes.object.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    openUserMenu: React.PropTypes.func.isRequired,
    closeUserMenu: React.PropTypes.func.isRequired,
    children: React.PropTypes.element
  }
}
