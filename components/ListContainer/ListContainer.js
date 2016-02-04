import React, { Component } from 'react'
import { Link } from 'react-router'

class ListContainer extends Component {
  render () {
    return (
      <div className="list-container">
        Yoo List Container
        { this.props.children }
      </div>
    )
  }
}

export { ListContainer }
