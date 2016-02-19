import React, { Component } from 'react'

import './style.css'

export default class Menu extends Component {
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
    let { headline, children, open, left, bottom } = this.props
    let styles = { left, bottom, display: open ? '' : 'none' }

    return (
      <div style={styles} className='menu'>
        {this.renderHeadline(headline)}

        {children}
      </div>
    )
  }
}

Menu.propTypes = {
  left: React.PropTypes.string,
  bottom: React.PropTypes.string,
  headline: React.PropTypes.string,
  open: React.PropTypes.bool
}
