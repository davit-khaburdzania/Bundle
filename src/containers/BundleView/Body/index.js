import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'
import { AddLink } from '../../'

import './index.css'

export default function BundleViewBody ({
  bundle
}) {
  return (
    <div className='bundle-view-body'>
      <BundleView.Description name={bundle.name} description={bundle.description} />

      <AddLink bundleId={bundle.id} />
      <div className='line' />

      {bundle.links.map((link, index) =>
        <BundleView.Link key={index} link={link} />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: PropTypes.object
}
