import { SideNavigation, Alerts } from '..'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import * as userActions from '../../actions/User'
import './style.css'

const connectState = (state) => ({

})

const connectProps = {
  ...userActions
}

@connect(connectState, connectProps)
export default class App extends React.Component {
  componentWillMount () {
    let { children, location, authenticate } = this.props
    let { query } = this.props.location

    if (query.authenticated === "true") {
      let user = JSON.parse(query.user)
      authenticate(user)
      browserHistory.push('/')
    }
  }

  render () {
    let { children } = this.props

    return (
      <div>
        <Alerts />
        <div className='application-container'>
          <SideNavigation />
          {children}
        </div>
      </div>
    )
  }
}
