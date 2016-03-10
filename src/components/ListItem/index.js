import React from 'react'
import Collection from './Collection'
import Bundle from './Bundle'
import { ListToolbar } from './..'

import './index.css'

export default function ListItem ({
  Component,
  type,
  id,
  isFavorited,
  favorite,
  unfavorite,
  ...componentProps
}) {
  return (
    <div className='list-item'>
      <Component {...componentProps} />
      <ListToolbar type={type} id={id} isFavorited={isFavorited}
        favorite={favorite} unfavorite={unfavorite}
      />
    </div>
  )
}

ListItem.Collection = Collection
ListItem.Bundle = Bundle
