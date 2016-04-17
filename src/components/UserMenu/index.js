import listensToClickOutside from 'react-onclickoutside/decorator'
import './index.css'

@listensToClickOutside()
export default class UserMenu extends React.Component {
  handleClickOutside () {
    this.props.isOpen && this.props.closeUserMenu()
  }

  render () {
    let { children, isOpen, openUserMenu, userImage } = this.props

    return (
      <div className='user-menu'>
        {isOpen ? children : null}

        <div className='avatar-holder' onClick={openUserMenu}>
          <img src={userImage} />
        </div>
      </div>
    )
  }

  static propTypes = {
    userImage: React.PropTypes.string.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    openUserMenu: React.PropTypes.func.isRequired,
    closeUserMenu: React.PropTypes.func.isRequired,
    children: React.PropTypes.element
  }
}
