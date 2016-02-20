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
        <span style={this.displayInput(search)} onClick={onClick}
          className='ion-ios-search icon'>
        </span>

        <input className='search-input animated flipInX' type='text'
          style={this.displayInput(search, true)} placeholder='Search...'
          onChange={(e) => { onChange(e.target.value) }} />
      </div>
    )
  }
}

SearchContainer.propTypes = {
  onClick: React.PropTypes.func,
  onChange: React.PropTypes.func,
  search: React.PropTypes.bool
}
