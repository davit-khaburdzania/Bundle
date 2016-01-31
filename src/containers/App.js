import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

class App extends Component {
  render () {
    const { counter, dispatch } = this.props

    return (
      <div>
        <Counter
          counter={counter}
          { ...bindActionCreators(CounterActions, dispatch) } />
      </div>
    )
  }
}

export default connect((state) => ({ counter: state.counter }))(App)
