import React, { Component, PropTypes } from 'react'

import {
  List,
  ListItem
} from '../../../components'

import './index.css'

function isAnyResult (searchResults) {
  return isBundles(searchResults) || isCollections(searchResults)
}

function isBundles (searchResults) {
  return searchResults.bundles.length
}

function isCollections (searchResults) {
  return searchResults.collections.length
}

function shouldShow (show) {
  return { 'display': show ? 'block' : 'none' }
}

function renderResults (searchResults) {
  console.log('shemodis', searchResults)
  if (searchResults && isAnyResult(searchResults)) {
    return (
      <div className='search-results'>
        <h3 className='title'> Search results </h3>

        <List>
        <h4 className='name'
        style={shouldShow(isCollections(searchResults))}>
        Collections
        </h4>
        {searchResults.collections.map((item, index) =>
          <ListItem key={index} {...item} Component={ListItem.Collection} />
        )}
        </List>

        <List>
        <h4 style={shouldShow(isBundles(searchResults))}
        className='name'> Bundles </h4>
        {searchResults.bundles.map((item, index) =>
          <ListItem key={index} {...item} Component={ListItem.Bundle} />
        )}
        </List>

      </div>
    )
  } else {
    return (
      <div className="search-note"> Search Bundles and Collections </div>
    )
  }
}

export default function SearchBody ({ searchResults }) {
  return (
    <div className='search-results-wrapper'>

    { renderResults(searchResults) }

    </div>
  )
}

SearchBody.propTypes = {
  searchResults: PropTypes.object
}
