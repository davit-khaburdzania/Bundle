import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'
import BundleName from './BundleName'
import BundleDescription from './BundleDescription'
import { AddLink } from '../../'

import './index.css'

export default function BundleViewBody ({
  bundle,
  editMode,
  toggleEditMode,
  handleLinkEdit,
  handleChange
}) {
  return (

    <div className='bundle-view-body'>
      <BundleName name={bundle.name} editMode={editMode}
        handleChange={handleChange} />
      <BundleDescription description={bundle.description} editMode={editMode}
        handleChange={handleChange} />

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
  bundle: PropTypes.object,
  editMode: PropTypes.bool,
  toggleEditMode: PropTypes.func,
  handleLinkEdit: PropTypes.func,
  handleChange: PropTypes.func
}
