import React, { Component, PropTypes } from 'react'

import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView ({
  bundle
}) {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader />
      <BundleViewBody bundle={bundle}/>
    </div>
  )
}

BundleView.propTypes = {
  bundle: PropTypes.object
}
