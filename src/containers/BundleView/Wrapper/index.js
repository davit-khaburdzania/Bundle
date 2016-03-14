import React, { Component, PropTypes } from 'react'

import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView ({
  bundle,
  editMode,
  toggleEditMode,
  handleLinkEdit
}) {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader />
      <BundleViewBody editMode={editMode} handleLinkEdit={handleLinkEdit}
        toggleEditMode={toggleEditMode} bundle={bundle} />
    </div>
  )
}

BundleView.propTypes = {
  bundle: PropTypes.object
}
