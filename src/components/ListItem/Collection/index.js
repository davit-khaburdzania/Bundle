import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { ListToolbar } from './../..'

function sharedWithText (count) {
  if (count || count === 0) {
    return `· Shared with ${count} people`
  } else {
    return ''
  }
}

export default function CollectionListItem ({
  id,
  slug,
  name,
  created_at,
  bundles_count,
  shares_count,
  ...toolbarProps
}) {
  return (
    <div>
      <ListToolbar id={id} {...toolbarProps} />

      <Link to={'/collections/' + slug}>
        <div>
          <h1>
            {name}
          </h1>
          <h2>
            <span>{bundles_count} Bundle</span>
            <span>{sharedWithText(shares_count)}</span>
          </h2>
        </div>
      </Link>
    </div>
  )
}

CollectionListItem.propTypes = {
  id: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  bundles_count: PropTypes.number.isRequired,
  shares_count: PropTypes.number.isRequired
}
