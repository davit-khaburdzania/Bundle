import React, { Component } from 'react'

import './style.css'
import '../../../assets/vendor/animate.css'

export default class SearchContainer extends Component {
  displayInput (search, success) {
    if (success) return { display: search ? 'block' : 'none' }

    return { display: !search ? 'block' : 'none' }
  }

  render () {
    let { onClick, onChange, search } = this.props

    return (
      <div className='search-container-wrapper'>
        <span style={this.displayInput(search)}
          onClick={onClick}
          className='ion-ios-search icon'></span>
        <input className='search-input animated flipInX'
          style={this.displayInput(search, true)}
          onChange={(e) => { onChange(e.target.value) }}
          type='text'
          placeholder='Search...' />
      </div>
    )
  }
}

SearchContainer.propTypes = {
  onClick: React.PropTypes.func,
  onChange: React.PropTypes.func,
  search: React.PropTypes.bool
}
