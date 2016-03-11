import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Editable, ListToolbar } from './../..'


function sharedWithText (count) {
  if (count || count === 0) {
    return `· Shared with ${count} people`
  } else {
    return ''
  }
}

export default function CollectionListItem ({
  id,
  name,
  created_at,
  bundles_count,
  shares_count,
  editMode,
  rename,
  ...toolbarProps
}) {
  return (
    <div>
      <ListToolbar id={id} editMode={editMode} {...toolbarProps} />

      <Link to={'/collections/' + id}
        onClick={event => editMode && event.preventDefault()}
      >
        <div>
          <h1>
            <Editable editMode={editMode} value={name}
              enterAction={value => rename(id, value)}
            />
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
  name: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  bundles_count: PropTypes.number.isRequired,
  shares_count: PropTypes.number.isRequired,
  editMode: PropTypes.bool,
  rename: PropTypes.func.isRequired
}
