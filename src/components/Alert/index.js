import React, { Component } from 'react'

import './index.css'

export default function Alert ({ type, children }) {
  return (
    <div className='alert'>{children}</div>
  )
}
