import React, { PropTypes } from 'react'

import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView ({
  bundle,
  editMode,
  handleLinkEdit,
  handleChange,
  toggleEdit
}) {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader toggleEdit={toggleEdit} editMode={editMode} />

      <BundleViewBody editMode={editMode} handleLinkEdit={handleLinkEdit}
        bundle={bundle} handleChange={handleChange}
      />
    </div>
  )
}

BundleView.propTypes = {
  bundle: PropTypes.object.isRequired,
  editMode: PropTypes.bool,
  handleLinkEdit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}
