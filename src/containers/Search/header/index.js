import React, { Component, PropTypes } from 'react'

import { browserHistory } from 'react-router'

import './index.css'

export default class SearchHeader extends Component {
  constructor (props) {
    super(props)
  }

  onChange (e) {
    let value = e.target.value

    browserHistory.push(`/search/${value}`)
  }

  goToBundles () {
    browserHistory.push(`/bundles`)
  }

  render () {
    let { query } = this.props
    return (
      <div className='search-header-wrapper'>
        <input className='search-input animated flipInX' type='text'
          placeholder='Search...' onChange={this.onChange}
          value={query || ''}
        />
        <span onClick={this.goToBundles} className='close-search'>x</span>
      </div>
    )
  }
}

SearchHeader.propTypes = {
  query: PropTypes.string
}
