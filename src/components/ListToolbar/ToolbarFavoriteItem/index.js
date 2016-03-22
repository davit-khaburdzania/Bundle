import React, { PropTypes } from 'react'

export default function ToolbarFavoriteItem ({
  type,
  id,
  favorite,
  favorited,
  unfavorite
}) {
  if (favorited) {
    return <div className='icon icon-toolbar-favorite-full'
      onClick={unfavorite.bind(this, type, id)}
    />
  } else {
    return <div className='icon icon-toolbar-favorite'
      onClick={favorite.bind(this, type, id)}
    />
  }
}

ToolbarFavoriteItem.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  favorited: PropTypes.bool.isRequired,
  favorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.func.isRequired
}
