import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { App, Login, DevTools,
         CollectionsContainer,BundlesContainer,
         FavoritesContainer, NotificationsContainer } from '../'
import createStore from '../../store/createStore'
import history from '../../history'


let store = createStore({})

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="root-container">
          <Router history={ history }>
            <Route path="/" component={ App }>
              <Route path="/collections" component={ CollectionsContainer } />
              <Route path="/bundles" component={ BundlesContainer } />
              <Route path="/favorites" component={ FavoritesContainer } />
              <Route path="/notifications" component={ NotificationsContainer } />
            </Route>
            <Route path="/login" component={ Login } />
          </Router>

          <DevTools/>
        </div>
      </Provider>
    )
  }
}

export { Root }
