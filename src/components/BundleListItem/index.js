import React from 'react'

export default function BundleListItem ({
  name,
  created_at
}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{created_at}</h2>
    </div>
  )
}
