import React, { Component, PropTypes } from 'react'

import SearchHeader from './SearchHeader'
import SearchBody from './SearchBody'

export default function SearchWrapper () {

  return (
    <div className='search-wrapper'>
      <SearchHeader />
      <SearchBody />
    </div>
  )
}
