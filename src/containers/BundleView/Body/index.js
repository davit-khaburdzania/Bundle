import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'
import './index.css'

export default function BundleViewBody ({
  bundle,
  handleDesctiptionChange,
  editMode,
  toggleEditMode
}) {
  return (
    <div className='bundle-view-body'>
      <BundleView.Description toggleEditMode={toggleEditMode}
        editMode={editMode} handleDesctiptionChange={handleDesctiptionChange}
        name={bundle.name} description={bundle.description} />

      {bundle.links.map((link, index) =>
        <BundleView.Link key={index} link={link} />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: PropTypes.object
}
