import React, { Component, PropTypes } from 'react'

import SearchHeader from '../header'
import SearchBody from '../body'

import './index.css'

export default function SearchWrapper ({ query, searchResults }) {
  return (
    <div className='search-wrapper'>
      <SearchHeader query={query} />
      <SearchBody searchResults={searchResults} />
    </div>
  )
}

SearchWrapper.propTypes = {
  searchResults: PropTypes.object,
  query: PropTypes.string
}
