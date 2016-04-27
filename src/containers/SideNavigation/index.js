import { connect } from 'react-redux'
import { currentUserSelector } from '../../selectors'

import ui from 'redux-ui'
import SideNavigationTop from './top'
import SideNavigationBottom from './bottom'

import './index.css'

const connectState = (state) => ({
  currentUser: currentUserSelector(state)
})

@ui({
  key: 'userMenu',
  state: { isOpen: false }
})
@connect(connectState)
export default class SideNavigation extends React.Component {
  openUserMenu () {
    this.props.updateUI('isOpen', true)
  }

  closeUserMenu () {
    this.props.updateUI('isOpen', false)
  }

  render () {
    let { ui, currentUser } = this.props

    return (
      <div className='side-navigation'>
        <SideNavigationTop/>
        <SideNavigationBottom isOpen={ui.isOpen} currentUser={currentUser}
          closeUserMenu={this.closeUserMenu.bind(this)}
          openUserMenu={this.openUserMenu.bind(this)}
        />
      </div>
    )
  }
}
