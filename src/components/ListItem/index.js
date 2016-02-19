import React, { Component } from 'react'

import './style.css'

export default class ListItem extends Component {
  render () {
    let { Component, ...componentProps } = this.props

    return (
      <div className='list-item'>
        <Component {...componentProps} />
      </div>
    )
  }
}
