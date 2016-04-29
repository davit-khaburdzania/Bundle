import { SideNavigation, Alerts } from '..'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { currentUserSelector } from '../../selectors'
import * as userActions from '../../actions/User'
import './style.css'

const connectState = (state) => ({
  currentUser: currentUserSelector(state)
})

const connectProps = {
  ...userActions
}

@connect(connectState, connectProps)
export default class App extends React.Component {
  componentWillMount () {
    let { children, location, authenticate, me } = this.props
    let { query } = this.props.location
    let auth_token = localStorage.getItem('auth_token')

    if (query.authenticated === "true") {
      let user = JSON.parse(query.user)
      authenticate(user)

      browserHistory.push('/')
    } else if (auth_token) {
      me()
    }
  }

  render () {
    let { children, currentUser } = this.props

    if (!currentUser) {
      return <a href='http://localhost:3000/auth/facebook'>Authenticate with Facebook </a>
    }

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
