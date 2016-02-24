import React, { Component, PropTypes } from 'react'
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
