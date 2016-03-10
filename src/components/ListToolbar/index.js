import React from 'react'

import ToolbarShareItem from './ToolbarShareItem'
import ToolbarRenameItem from './ToolbarRenameItem'
import ToolbarDeleteItem from './ToolbarDeleteItem'
import ToolbarFavoriteItem from './ToolbarFavoriteItem'

import './index.css'

export default function ListToolbar () {
  return (
    <div className='list-toolbar'>
      <ToolbarShareItem />
      <ToolbarRenameItem />
      <ToolbarDeleteItem />
      <ToolbarFavoriteItem />
    </div>
  )
}
