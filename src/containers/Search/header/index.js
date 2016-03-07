import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { browserHistory } from 'react-router'

import './index.css'

export default class SearchHeader extends Component {
  onChange (e) {
    let value = e.target.value

    browserHistory.push(`/search/${value}`)
  }

  render () {
    const { query } = this.props

    return (
      <div className='search-header-wrapper'>
        <input className='search-input animated flipInX' type='text'
          placeholder='Search...' onChange={this.onChange}
          value={query || ''} />
        <Link to="/bundles" className='close-search'>x</Link>
      </div>
    )
  }
}

SearchHeader.propTypes = {
  query: PropTypes.string
}
