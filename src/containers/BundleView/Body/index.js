import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'
import { AddLink } from '../../'

import './index.css'

export default function BundleViewBody ({
  bundle,
  editMode,
  toggleEditMode,
  handleLinkEdit
}) {
  return (

    <div className='bundle-view-body'>
      <BundleView.Description toggleEditMode={toggleEditMode}
        editMode={editMode} bundle={bundle}
      />

      <AddLink bundleId={bundle.id} />
      <div className='line' />

      {bundle.links.map((link, index) =>
        <BundleView.Link key={index} link={link} editMode={editMode}
          handleLinkEdit={handleLinkEdit} />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: PropTypes.object
}
