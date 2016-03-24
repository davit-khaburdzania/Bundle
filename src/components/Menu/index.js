import React, { Component, PropTypes } from 'react'

import './index.css'

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
    headline: PropTypes.string
  }
}
