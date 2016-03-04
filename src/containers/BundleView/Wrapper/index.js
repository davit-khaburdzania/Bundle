import React, { Component } from 'react'

import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'


export default function BundleView () {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader />
      <BundleViewBody />
    </div>
  )
}
