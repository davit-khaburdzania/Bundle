import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import * as userActions from '../../actions/User'

const connectProps = { ...userActions }

@connect(null, connectProps)
export default class Logout extends React.Component {
  componentWillMount () {
    this.props.logoutUser()
    browserHistory.push('/')
  }

  render () {
    return false
  }
}
