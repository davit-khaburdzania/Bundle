import React from 'react'
import { Link } from 'react-router'
import { ListToolbar } from './../..'
import Date from '../../Date'

export default function BundleListItem ({
  name,
  created_at,
  url,
  type,
  id,
  isFavorited,
  favorite,
  unfavorite,
  remove,
  startEdit,
  endEdit,
  editMode
}) {

  return (
    <div>
      <ListToolbar type={type} id={id} isFavorited={isFavorited}
        favorite={favorite} unfavorite={unfavorite} remove={remove}
        startEdit={startEdit} endEdit={endEdit} editMode={editMode}
      />

      <Link to={url}>
        <h1>
          {editMode ? '[EDITMODE] ' : ''}
          {name}
        </h1>
        <h2>
          Created <Date type='fromNow'>{created_at}</Date>
        </h2>
      </Link>
    </div>
  )
}
