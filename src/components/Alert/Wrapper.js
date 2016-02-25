import React, { PropTypes } from 'react'

import './wrapper.css'

export default function Wrapper ({ children }) {
  return <div className='alerts-container'>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.element.isRequired
}
