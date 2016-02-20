import React, { Component } from 'react'

import './style.css'

export default class ListContainer extends Component {
  render () {
    let { children } = this.props

    return (
      <div className='list-container'>
        {children}
      </div>
    )
  }
}
