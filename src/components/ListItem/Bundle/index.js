import React from 'react'
import { Link } from 'react-router'
import Date from '../../Date'

export default function BundleListItem ({
  name,
  created_at,
  url
}) {
  return (
    <Link to={url}>
      <h1>
        {name}
      </h1>
      <h2>
        Created <Date type='fromNow'>{created_at}</Date>
      </h2>
    </Link>
  )
}
