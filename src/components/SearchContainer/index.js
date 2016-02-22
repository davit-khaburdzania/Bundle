import React, { Component, PropTypes } from 'react'

import './style.css'

export default function SearchContainer ({
  onClick,
  onChange,
  search
}) {
  return (
    <div className='search-container-wrapper'>
      <span
        onClick={onClick}
        className='icon ion-ios-search search-icon'
        style={{ 'display': search ? 'none' : 'block' }}
      />

      <input
        className='search-input animated flipInX'
        type='text'
        placeholder='Search...'
        style={{ 'display': search ? 'block' : 'none' }}
        onChange={(e) => { onChange(e.target.value) }}
      />
    </div>
  )
}

SearchContainer.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  search: PropTypes.bool
}
