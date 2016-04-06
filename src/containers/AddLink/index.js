import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

const connectState = (state) => ({
  currentBundle: state.Bundle.toJS().current,
  currentUser: state.User.toJS().me
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleAddLink extends React.Component {
  addLinkHandler (link) {
    const { currentUser, currentBundle, updateBundle } = this.props
    const payload = {
      links_attributes: [{
        ...link,
        creator_id: currentUser.id
      }]
    }

    updateBundle(currentBundle.id, payload)
  }

  render () {
    const { currentUser, currentBundle, fetchLink } = this.props
    const link = currentBundle.link

    if (link) {
      return <LinkPreview currentUser={currentUser} link={link}
        addLinkHandler={this.addLinkHandler.bind(this)} />
    } else {
      return <EnterUrl image={currentUser.image} bundleId={currentBundle.id}
        handeUrlEnter={fetchLink} />
    }
  }
}
