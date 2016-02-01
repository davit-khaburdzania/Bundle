import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Root from './containers/Root'
import DevTools from './containers/DevTools'
import createStore from './store/createStore'

let store = createStore({})

render(
  <Provider store={ store }>
    <div>
      <Root/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('app')
)
