import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import * as linkActions from '../../actions/Link'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

const connectState = (state) => ({
  bundle: state.Bundle.getIn(['byId', state.Route.getIn(['bundle', 'id'])]),
  currentUser: state.User.getIn(['byId', state.User.get('me')])
})

const connectProps = {
  ...bundleActions,
  ...linkActions
}

@connect(connectState, connectProps)
export default class BundleAddLink extends React.Component {
  addLinkHandler (link) {
    const { currentUser, bundle, links, clearCurrentLink,
      updateBundle, addCurrentLinkToBundle } = this.props

    const payload = {
      links_attributes: [link.set('creator_id', currentUser.id).toJS()]
    }

    if (bundle.get('isNewBundle')) {
      let linkWithCreator = link
        .set('creator', currentUser.id)
        .set('id', this.nextLinkId(links))

      return addCurrentLinkToBundle(bundle.get('id'), linkWithCreator)
    }

    updateBundle(bundle.get('id'), payload)
    clearCurrentLink(bundle.get('id'))
  }

  handeUrlEnter (url) {
    this.props.fetchLink(url, this.props.bundle.get('id'))
  }

  nextLinkId (links) {
    let max = links.keySeq().filter(id => id < 0).max() || 0
    return max - 1
  }

  render () {
    const { currentUser, currentLink, bundle, fetchLink } = this.props

    if (currentLink) {
      return <LinkPreview link={currentLink} currentUser={currentUser}
               addLinkHandler={this.addLinkHandler.bind(this)}
             />
    } else {
      return <EnterUrl image={currentUser.image}
               bundleId={bundle.get('id')}
               handeUrlEnter={this.handeUrlEnter.bind(this)}
             />
    }
  }
}
