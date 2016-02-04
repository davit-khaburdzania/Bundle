import React, { Component } from 'react'
import { Link } from 'react-router'

class FavoritesContainer extends Component {
  render () {
    return (
      <div className="favorites-container">
        <div className="top-nav">
          <h2 className="title"> Favorites </h2>
        </div>
      </div>
    )
  }
}

export { FavoritesContainer }
