import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Editable, Date, ListToolbar } from './../..'

export default function BundleListItem ({
  id,
  name,
  created_at,
  url,
  editMode,
  rename,
  ...toolbarProps
}) {
  return (
    <div>
      <ListToolbar id={id} editMode={editMode} {...toolbarProps} />

      <Link to={url} onClick={event => editMode && event.preventDefault()}>
        <h1>
          <Editable editMode={editMode} value={name}
            enterAction={value => rename(id, value)}
          />
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
  url: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  rename: PropTypes.func.isRequired
}
