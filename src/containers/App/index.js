import { SideNavigation, Alerts, Auth } from '..'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { currentUserSelector } from '../../selectors'
import * as userActions from '../../actions/User'
import './style.css'

export default class App extends React.Component {
  render () {
    let { children } = this.props

    return (
      <Auth location={this.props.location}>
        <Alerts />
        <div className='application-container'>
          <SideNavigation />
          {children}
        </div>
      </Auth>
    )
  }
}
