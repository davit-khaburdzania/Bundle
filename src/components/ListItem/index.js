import React from 'react'
import Collection from './Collection'
import Bundle from './Bundle'

import './index.css'

export default function ListItem ({
  Component,
  ...componentProps,
  active
}) {
  return (
    <div className={'list-item' + (active ? ' list-item-active' : '')}>
      <Component {...componentProps} />
    </div>
  )
}

ListItem.Collection = Collection
ListItem.Bundle = Bundle
