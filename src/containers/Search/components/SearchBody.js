import React from 'react'

import {
  List,
  ListItem
} from '../../../components'

import './body.css'

function isAnyResult (searchResults) {
  return searchResults.collections.length || searchResults.bundles.length
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

export default function SearchBody ({ searchResults }) {
  return (
    <div className='search-results-wrapper'>
      <div style={shouldShow(!isAnyResult(searchResults))}
        className="search-note"> Search Bundles and Collections </div>


      <div className='search-results'
        style={shouldShow(isAnyResult(searchResults))}>

        <h3 className='title'> Search results </h3>

        <List>
          <h4 className='name'
            style={shouldShow(isCollections(searchResults))}>
             Collections
          </h4>
          {searchResults.collections.map((item, index) =>
            <ListItem key={index}
              {...item}
              Component={ListItem.Collection}
            />
          )}
        </List>

        <List>
          <h4 style={shouldShow(isBundles(searchResults))}
            className='name'> Bundles </h4>
          {searchResults.bundles.map((item, index) =>
            <ListItem key={index}
              {...item}
              Component={ListItem.Bundle}
            />
          )}
        </List>

      </div>
    </div>
  )
}
