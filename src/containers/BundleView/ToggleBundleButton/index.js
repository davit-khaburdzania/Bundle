import React, { Component, PropTypes } from 'react'

import { shouldShow } from '../../../helpers'

import './index.css'

export default function ToggleBundleButton ({ toggleEdit, editMode }) {
  return (
    <div className='toggle-btn-wrapper'>
      <button style={shouldShow(!editMode)} onClick={toggleEdit.bind(this, false)}
        className='btn mod-toggle'> Edit </button>
      <button style={shouldShow(editMode)} onClick={toggleEdit.bind(this, true)}
        className='btn mod-toggle'> Save </button>

    </div>
  )
}

ToggleBundleButton.propTypes = {
  editMode: PropTypes.bool,
  toggleEdit: PropTypes.func
}
