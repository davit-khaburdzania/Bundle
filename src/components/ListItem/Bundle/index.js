import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Date, ListToolbar } from './../..'

export default function BundleListItem ({
  id,
  name,
  created_at,
  url,
  ...toolbarProps
}) {
  return (
    <div>
      <ListToolbar id={id} {...toolbarProps} />

      <Link to={url}>
        <h1>
          {name}
        </h1>
        <h2>
          Created <Date type='fromNow'>{created_at}</Date>
        </h2>
      </Link>
    </div>
  )
}

BundleListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
