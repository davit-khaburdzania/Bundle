import React, { Component, PropTypes } from 'react'

import ToggleBundleButton from '../ToggleBundleButton'

export default function BundleViewHeader ({ toggleEdit, editMode }) {
  return (
    <div className='bundle-view-header-wrapper'>
      <ToggleBundleButton editMode={editMode} toggleEdit={toggleEdit} />
    </div>
  )
}

BundleViewHeader.propTypes = {
  editMode: PropTypes.bool,
  toggleEdit: PropTypes.func
}
