import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

const connectState = (state) => ({
  currentBundle: state.Bundle.get('current'),
  currentUser: state.User.get('me')
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleAddLink extends React.Component {
  addLinkHandler (link) {
    const { currentUser, currentBundle,
      updateBundle, updateBundleState } = this.props

    const payload = {
      links_attributes: [link.set('creator_id', currentUser.get('id')).toJS()]
    }

    if (currentBundle.get('isNewBundle')) {
      let linkWithCreator = link.set('creator', currentUser)
      return updateBundleState(linkWithCreator)
    }

    updateBundle(currentBundle.get('id'), payload)
  }

  render () {
    const { currentUser, currentBundle, fetchLink } = this.props
    const link = currentBundle.get('link')

    if (link) {
      return <LinkPreview link={link} currentUser={currentUser}
               addLinkHandler={this.addLinkHandler.bind(this)}
             />
    } else {
      return <EnterUrl image={currentUser.get('image')}
               bundleId={currentBundle.get('id')}
               handeUrlEnter={fetchLink}
             />
    }
  }
}
