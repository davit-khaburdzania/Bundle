import React, { PropTypes } from 'react'

import ToolbarShareItem from './ToolbarShareItem'
import ToolbarRenameItem from './ToolbarRenameItem'
import ToolbarDeleteItem from './ToolbarDeleteItem'
import ToolbarFavoriteItem from './ToolbarFavoriteItem'

import './index.css'

export default function ListToolbar ({
  type,
  id,
  favorited,
  favorite,
  unfavorite,
  remove,
  edit,
  editMode
}) {
  return (
    <div className='list-toolbar'>
      <ToolbarShareItem />

      <ToolbarRenameItem id={id} editMode={editMode} edit={edit}/>

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
  remove: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  editMode: PropTypes.bool
}
