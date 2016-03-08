import React from 'react'
import { Link } from 'react-router'
import Date from '../../Date'

function shared_with_text(count) {
  if (count || count == 0) {
    return `· Shared with ${count} people`
  } else {
    return ''
  }
}

export default function CollectionListItem ({
  id,
  name,
  created_at,
  bundle_count,
  share_count
}) {
  return (
    <Link to={'/collections/' + id}>
      <div>
        <h1>
          {name}
        </h1>
        <h2>
          <span> {bundle_count} Bundle </span>
          <span> {shared_with_text(share_count)}</span>
        </h2>
      </div>
    </Link>
  )
}