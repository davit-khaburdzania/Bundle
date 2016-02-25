const APP_PATH = '../../..'

import { browserHistory } from 'react-router'

import React from 'react'

import './header.css'

export default function SearchHeader () {

  function onChange (e) {
    let value = e.target.value

    browserHistory.push(`/search/${value}`)
  }

  return (
    <div className="search-header-wrapper">
      <input className='search-input animated flipInX' type='text'
        placeholder='Search...' onChange={onChange}
      />
    </div>
  )
}
