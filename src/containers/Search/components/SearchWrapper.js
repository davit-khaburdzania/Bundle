import React, { Component, PropTypes } from 'react'

import SearchHeader from './SearchHeader'
import SearchBody from './SearchBody'

import './wrapper.css'

export default function SearchWrapper ({ routeParams, searchResults }) {

  return (
    <div className='search-wrapper'>
      <SearchHeader routeParams={routeParams} />
      <SearchBody searchResults={searchResults} />
    </div>
  )
}
