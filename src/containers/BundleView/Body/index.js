import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'

export default function BundleViewBody ({
  bundle
}) {
  return (
    <div className='bundle-body'>
      <BundleView.Description name={bundle.name} description={bundle.description} />
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: PropTypes.object
}
