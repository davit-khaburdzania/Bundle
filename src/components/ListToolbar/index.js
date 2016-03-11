import React, { PropTypes } from 'react'

import ToolbarShareItem from './ToolbarShareItem'
import ToolbarRenameItem from './ToolbarRenameItem'
import ToolbarDeleteItem from './ToolbarDeleteItem'
import ToolbarFavoriteItem from './ToolbarFavoriteItem'

import './index.css'

export default function ListToolbar ({
  type,
  id,
  isFavorited,
  favorite,
  unfavorite,
  remove
}) {
  return (
    <div className='list-toolbar'>
      <ToolbarShareItem />
      <ToolbarRenameItem />
      <ToolbarDeleteItem id={id} remove={remove} />
      <ToolbarFavoriteItem type={type} id={id} isFavorited={isFavorited}
        favorite={favorite} unfavorite={unfavorite}
      />
    </div>
  )
}

ToolbarFavoriteItem.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  favorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.func.isRequired,
}
