import React from 'react'
import Item from './item'

export default function List ({ children }) {
  return (
    <div className='list'>
      {children}
    </div>
  )
}

List.Item = Item
