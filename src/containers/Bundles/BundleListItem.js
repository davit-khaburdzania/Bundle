import React from 'react'
import Date from './../../components/Date'

import './BundleListItem.css'

export default function BundleListItem ({
  name,
  created_at
}) {
  return (
    <div>
      <h1>
        {name}
      </h1>
      <h2>
        Created <Date type='fromNow'>{created_at}</Date>
      </h2>
    </div>
  )
}
