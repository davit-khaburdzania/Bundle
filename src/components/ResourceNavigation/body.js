import React, { PropTypes } from 'react'

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
