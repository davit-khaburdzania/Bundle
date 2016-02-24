import React from 'react'
import { Date } from '../../../components'

export default function Item ({
  name,
  created_at,
  bundle_count,
  share_count
}) {
  function shared_with_text() {
    if (share_count || share_count == 0) {
      return `· Shared with ${share_count} people`
    } else {
      return ''
    }
  }

  return (
    <div>
      <h1>
        {name}
      </h1>
      <h2>
        <span> {bundle_count} Bundle </span>
        <span> {shared_with_text()}</span>
      </h2>
    </div>
  )
}
