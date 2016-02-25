import React, { Component } from 'react'
import Collection from './Collection'
import Bundle from './Bundle'

import './index.css'

export default function ListItem ({
  Component,
  ...componentProps
}) {
  return (
    <div className='list-item'>
      <Component {...componentProps} />
    </div>
  )
}

ListItem.Collection = Collection
ListItem.Bundle = Bundle
