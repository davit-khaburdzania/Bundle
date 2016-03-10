import React from 'react'
import Collection from './Collection'
import Bundle from './Bundle'
import { ListToolbar } from './..'

import './index.css'

export default function ListItem ({
  Component,
  ...componentProps
}) {
  return (
    <div className='list-item'>
      <Component {...componentProps} />
      <ListToolbar />
    </div>
  )
}

ListItem.Collection = Collection
ListItem.Bundle = Bundle
