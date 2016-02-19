import React, { Component } from 'react'

import './style.css'

export default function ListItem ({ Component, ...componentProps }) {
  return (
    <div className='list-item'>
      <Component {...componentProps} />
    </div>
  )
}
