import React, { Component, PropTypes } from 'react'
import Header from './header'
import Body from './body'

import './index.css'

export default function ResourceNavigation ({
	children
}) {
  return (
    <div className='resource-navigation'>
			{children}
    </div>
  )
}

ResourceNavigation.propTypes = {
	children: PropTypes.element
}

ResourceNavigation.Header = Header
ResourceNavigation.Body = Body
