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
  remove,
  startEdit,
  endEdit,
  editMode
}) {
  return (
    <div className='list-toolbar'>
      <ToolbarShareItem />
      <ToolbarRenameItem id={id} editMode={editMode}
        startEdit={startEdit} endEdit={endEdit}/>
      <ToolbarDeleteItem id={id} remove={remove} />
      <ToolbarFavoriteItem type={type} id={id} isFavorited={isFavorited}
        favorite={favorite} unfavorite={unfavorite}
      />
    </div>
  )
}

ListToolbar.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  favorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  startEdit: PropTypes.func.isRequired,
  endEdit: PropTypes.func.isRequired,
  editMode: PropTypes.bool
}
