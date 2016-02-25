import React from 'react'
import { Link } from 'react-router'
import Date from '../../Date'

export default function CollectionListItem ({
  id,
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
    <Link to={'/collections/' + id}>
      <div>
        <h1>
          {name}
        </h1>
        <h2>
          <span> {bundle_count} Bundle </span>
          <span> {shared_with_text()}</span>
        </h2>
      </div>
    </Link>
  )
}
