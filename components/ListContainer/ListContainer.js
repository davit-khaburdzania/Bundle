import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'

class ListContainer extends Component {
  render () {
    return (
      <div className="list-container">
        { this.props.children }
      </div>
    )
  }
}

export { ListContainer }
