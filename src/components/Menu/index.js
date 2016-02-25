import React, { Component, PropTypes } from 'react'
import listensToClickOutside from 'react-onclickoutside/decorator'

import './index.css'

@listensToClickOutside()
export default class Menu extends Component {
  handleClickOutside () {
    this.props.closeUserMenu()
  }

  renderHeadline (headline) {
    if (headline) {
      return (
        <div className='headline'>
          <span>{headline}</span>
          <hr />
        </div>
      )
    }
  }

  render () {
    let { headline, children, left, bottom } = this.props
    let styles = { left, bottom }

    return (
      <div style={styles} className='menu'>
        {this.renderHeadline(headline)}

        {children}
      </div>
    )
  }

  static propTypes = {
    left: PropTypes.string,
    bottom: PropTypes.string,
    headline: PropTypes.string,
    closeUserMenu: PropTypes.func.isRequired
  }
}
