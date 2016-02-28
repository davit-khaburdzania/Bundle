import React, { Component } from 'react'

export default class Navigation extends Component {
  render () {
    let { listChildren } = this.props

    return (
      <div>
        {listChildren}
      </div>
    )
  }
}
