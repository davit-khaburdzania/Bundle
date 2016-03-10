import React, { Component, PropTypes } from 'react'
import { BundleView } from '../../../components'
import { AddLink } from '../../'

import './index.css'

export default function BundleViewBody ({
  bundle
}) {
  const creator = {
    image: 'http://i.imgur.com/XMnLzi2.jpg',
    name: 'Sarah Gadon'
  }

  return (
    <div className='bundle-view-body'>
      <BundleView.Description name={bundle.name} description={bundle.description} />

      <AddLink bundleId={bundle.id} creator={creator} />

      {bundle.links.map((link, index) =>
        <BundleView.Link key={index} link={link} />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: PropTypes.object
}
