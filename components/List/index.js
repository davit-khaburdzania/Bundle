import React, { Component } from 'react'

class List extends Component {
  render () {
    let { children } = this.props

    return (
      <div className='list'>
        {children}
      </div>
    )
  }
}

export { List }
