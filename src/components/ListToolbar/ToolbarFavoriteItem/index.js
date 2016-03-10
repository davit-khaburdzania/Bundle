import React, { PropTypes } from 'react'

export default function ToolbarFavoriteItem ({
  type,
  id,
  isFavorited,
  favorite,
  unfavorite
}) {
  if (isFavorited) {
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
  isFavorited: PropTypes.bool.isRequired,
  favorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.func.isRequired,
}
