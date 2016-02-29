import React, { PropTypes } from 'react'

import './body.css'

export default function Body ({
  children
}) {
  return (
    <div className='resource-navigation-body'>
      {children}
    </div>
  )
}

Body.propTypes = {
  children: PropTypes.node
}
