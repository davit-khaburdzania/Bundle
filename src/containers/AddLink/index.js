import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import * as linkActions from '../../actions/Link'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

const connectState = (state) => ({
  bundle: state.Bundle.getIn(['byId', state.Route.getIn(['bundle', 'id'])]),
  currentUser: state.User.get('me')
})

const connectProps = {
  ...bundleActions,
  ...linkActions
}

@connect(connectState, connectProps)
export default class BundleAddLink extends React.Component {
  addLinkHandler (link) {
    const { currentUser, bundle, clearCurrentLink,
      updateBundle, addCurrentLinkToBundle } = this.props

    const payload = {
      links_attributes: [link.set('creator_id', currentUser.get('id')).toJS()]
    }

    if (bundle.get('isNewBundle')) {
      let linkWithCreator = link.set('creator', currentUser)
      return addCurrentLinkToBundle(bundle.get('id'), linkWithCreator)
    }

    updateBundle(bundle.get('id'), payload)
    clearCurrentLink(bundle.get('id'))
  }

  handeUrlEnter (url) {
    this.props.fetchLink(url, this.props.bundle.get('id'))
  }

  render () {
    const { currentUser, currentLink, bundle, fetchLink } = this.props

    if (currentLink) {
      return <LinkPreview link={currentLink} currentUser={currentUser}
               addLinkHandler={this.addLinkHandler.bind(this)}
             />
    } else {
      return <EnterUrl image={currentUser.get('image')}
               bundleId={bundle.get('id')}
               handeUrlEnter={this.handeUrlEnter.bind(this)}
             />
    }
  }
}
