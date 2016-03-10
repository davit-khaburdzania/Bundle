import React from 'react'

import './index.css'

export default function ListToolbar () {
  return (
    <div className='list-toolbar'>
      <div className='icon icon-toolbar-share' />
      <div className='icon icon-toolbar-rename' />
      <div className='icon icon-toolbar-delete' />
      <div className='icon icon-toolbar-favorite' />
    </div>
  )
}
