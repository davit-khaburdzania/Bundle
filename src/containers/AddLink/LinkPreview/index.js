import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'

import './index.css'

export default function LinkPreview({
  link,
  currentUser,
  addLinkHandler
}) {
  const linkWithCreator = {
    ...link,
    creator: currentUser,
    created_at: link.created_at || new Date().toISOString()
  }

  return (
    <div className='add-link-preview'>
      <BundleView.Link link={linkWithCreator} />
      <button className='add-link-button' onClick={addLinkHandler.bind(this, link)}>Add Link</button>
    </div>
  )
}

LinkPreview.propTypes = {
  link: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  addLinkHandler: PropTypes.func.isRequired
}
