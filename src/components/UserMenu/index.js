import React, { Component, PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'

import './index.css'


export default class UserMenu extends Component {
  render () {
    return (
      <div className='user-menu'>
        {this.props.children}

        <div className='avatar-holder' onClick={this.props.openUserMenu}>
          <img src='/assets/images/avatar.png' />
        </div>
      </div>
    )
  }

  static propTypes = {
    openUserMenu: PropTypes.func.isRequired,
    children: PropTypes.element
  }
}
