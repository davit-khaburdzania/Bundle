import { Provider } from 'react-redux'
import { Router } from 'react-router'

import { store, history } from './../../store/store'
import routes from './../../routes'

export default function Root () {
  return (
    <Provider store={store}>
      <div className='root-container'>
        <Router history={history} routes={routes} />
      </div>
    </Provider>
  )
}
