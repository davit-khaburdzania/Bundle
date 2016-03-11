import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'

import './index.css'

export default function LinkPreview({
  link,
  currentUser,
  addLinkClick
}) {
  const linkWithCreator = { ...link, creator: currentUser }

  return (
    <div className='add-link-preview'>
      <BundleView.Link link={linkWithCreator} />
      <button className='add-link-button' onClick={addLinkClick.bind(this, link)}>Add Link</button>
    </div>
  )
}

LinkPreview.propTypes = {
  link: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  addLinkClick: PropTypes.func.isRequired
}
