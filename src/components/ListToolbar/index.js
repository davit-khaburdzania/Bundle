import React, { PropTypes } from 'react'

import ToolbarShareItem from './ToolbarShareItem'
import ToolbarDeleteItem from './ToolbarDeleteItem'
import ToolbarFavoriteItem from './ToolbarFavoriteItem'

import './index.css'

export default function ListToolbar ({
  type,
  id,
  favorited,
  favorite,
  unfavorite,
  remove
}) {
  return (
    <div className='list-toolbar'>
      <ToolbarShareItem />

      <ToolbarDeleteItem id={id} remove={remove} />

      <ToolbarFavoriteItem type={type} id={id} favorited={favorited}
        favorite={favorite} unfavorite={unfavorite}
      />
    </div>
  )
}

ListToolbar.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  favorited: PropTypes.bool,
  favorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}
