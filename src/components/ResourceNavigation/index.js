import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'

import './index.css'

export default function ResourceNavigation ({
  children,
  bundleView
}) {
  return (
    <div>
      <div className='resource-navigation'>
        {children}
      </div>
      {bundleView}
    </div>
  )
}

ResourceNavigation.propTypes = {
  children: PropTypes.element
}

ResourceNavigation.Header = Header
ResourceNavigation.Body = Body
