import React, { PropTypes } from 'react'

import './index.css'

export default function Search ({
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

Search.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  search: PropTypes.bool
}
