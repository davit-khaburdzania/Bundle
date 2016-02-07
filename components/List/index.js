import React, { Component } from 'react'

class List extends Component {
  render () {
    let { children } = this.props

    return (
      <div className='list'>
        this is whole list
        {children}
      </div>
    )
  }
}

export { List }
