import React, { Component } from 'react'

import './style.css'

export default function Item ({ Component, ...componentProps }) {
  return (
    <div className='list-item'>
      <Component {...componentProps} />
    </div>
  )
}
