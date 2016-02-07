import React, { Component } from 'react'

class ListItem extends Component {
  render () {
    let { Component, ...componentProps } = this.props

    return (
      <div className='list-item'>
        <Component {...componentProps} />
      </div>
    )
  }
}

export { ListItem }
