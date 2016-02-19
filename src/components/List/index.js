import React, { Component } from 'react'

export default class List extends Component {
  render () {
    let { children } = this.props

    return (
      <div className='list'>
        {children}
      </div>
    )
  }
}
