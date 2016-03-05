import React, { Component, PropTypes } from 'react'

import './index.css'

export default function BundleDescription ({
  name,
  description
}) {
  return (
    <div className='bundle-view-description'>
      <h2 className='name'>{name}</h2>
      <p className='description'>{description}</p>
    </div>
  )
}

BundleDescription.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}
