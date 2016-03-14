import React, { Component, PropTypes } from 'react'

import { shouldShow } from '../../../../helpers'

export default function BundleDescription ({
  description,
  editMode,
  handleChange
}) {
  return (
    <div className='bundle-description-wrapper'>

      <h2 style={shouldShow(!editMode)} className='bundle-description'>{description}</h2>

      <textarea style={shouldShow(editMode)} className='bundle-description-input'
        type='text' value={description} onChange={handleChange}/>

    </div>
  )
}

BundleDescription.propTypes = {
  description: PropTypes.string,
  editMode: PropTypes.bool,
  handleChange: PropTypes.func
}
