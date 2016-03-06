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
          {searchResults.collections.map((collection, index) =>
            <ListItem key={index} {...collection} Component={ListItem.Collection}
              url={'/collections/' + collection.id}
            />
          )}
        </List>

        <List>
          <h4 style={shouldShow(isBundles(searchResults))}
            className='name'> Bundles </h4>
          {searchResults.bundles.map((bundle, index) =>
            <ListItem key={index} {...bundle} Component={ListItem.Bundle}
              url={'/bundles/' + bundle.id}
            />
          )}
        </List>

      </div>
    </div>
  )
}

SearchBody.propTypes = {
  searchResults: PropTypes.object
}
