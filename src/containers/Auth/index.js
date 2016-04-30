import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { currentUserSelector } from '../../selectors'
import * as userActions from '../../actions/User'

const connectState = (state) => ({
  currentUser: state.User.getIn(['byId', state.User.get('current')])
})

const connectProps = {
  ...userActions
}

@connect(connectState, connectProps)
export default class Auth extends React.Component {
  componentWillMount () {
    let {currentUser, location, setCurrentUser, authenticateUser } = this.props
    let { query } = this.props.location
    let auth_token = localStorage.getItem('auth_token')

    if (query.authenticated === "true") {
      let user = JSON.parse(query.user)
      setCurrentUser(user)

      browserHistory.push('/')
    } else if (auth_token && !currentUser) {
      authenticateUser(auth_token)
    }
  }

  getAuthToken () {
    return localStorage.getItem('auth_token')
  }

  shouldNotRender () {
    return !this.props.currentUser && this.getAuthToken()
  }

  render () {
    let { children, currentUser } = this.props

    if (currentUser) return <div>{children}</div>
    if (this.shouldNotRender()) return false

    return (
      <div>
        <a href='http://localhost:3000/auth/facebook'>Authenticate with Facebook </a>
        <br />
        <a href='http://localhost:3000/auth/twitter'>Authenticate with Twitter </a>
      </div>
    )
  }
}
