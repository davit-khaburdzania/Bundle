import React, { PropTypes } from 'react'

import './header.css'

export default function Header ({
  children
}) {
  return (
    <div className='header'>
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node
}
