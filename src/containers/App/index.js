import { SideNavigation, Alerts, Auth } from '..'
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
