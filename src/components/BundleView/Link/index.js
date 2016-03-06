import React, { Component, PropTypes } from 'react'

import './index.css'

export default function BundleLink ({
  link
}) {
  return (
    <div className='bundle-view-link'>
      <div className='link-creator'>
        <img className='creator-image' src={link.creator.image} />
        <span className='creator-name'>{link.creator.name} </span>
        <span className='shared-this'> shared this </span>
      </div>
      <p className='link-description'>{link.description}</p>

      <div className='link-body'>
        <img className='link-image' src={link.image} />
        <span className='link-title'>{link.title}</span>
        <span className='link-created'>2 days ago </span>
      </div>
    </div>
  )
}

BundleLink.propTypes = {
  link: PropTypes.object
}
