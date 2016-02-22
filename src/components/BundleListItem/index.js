import React from 'react'
import Date from '../Date'

export default function BundleListItem ({
  name,
  created_at
}) {
  return (
    <div>
      {name}
      <br />
      <Date type='fromNow'>{created_at}</Date>
    </div>
  )
}
