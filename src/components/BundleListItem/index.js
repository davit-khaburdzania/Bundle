import React from 'react'

export default function BundleListItem ({ bundle }) {
  return (
    <div className='bundle-list-item'>
      {bundle.name}
    </div>
  )
}
