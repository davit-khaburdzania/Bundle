import React, { Component, PropTypes } from 'react'
import { urlDomain } from '../../../helpers'
import Date from '../../Date'

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

        <div className='link-image-wrapper'>
          <img className='link-image' src={link.image} />
        </div>

        <div className='link-details-wrapper'>
          <span className='link-title u-truncate-text'>{link.title}</span>
          <div className='link-details-sub-wrapper'>
            <span className='link-domain'> On {urlDomain(link.url)} </span>
            <span className='dot-symbol'> • </span>
            <span className='link-created'>
              <Date type='fromNow'>{link.created_at}</Date>
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}

BundleLink.propTypes = {
  link: PropTypes.object
}
