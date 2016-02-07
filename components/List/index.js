import React, { Component } from 'react'

class List extends Component {
  render () {
    let { children } = this.props

    return (
      <div className='List'>
        this is whole list
        {children}
      </div>
    )
  }
}

export { List }
